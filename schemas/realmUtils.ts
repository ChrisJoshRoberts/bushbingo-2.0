import Realm from 'realm';
import { AnimalSchema, ParkSchema, ParkAnimalSchema } from './schemas';
import { initialAnimals, initialParks } from './initialData';

// Helper function to add animal to park
export const addAnimalToPark = (realm, animalId, parkId) => {
  try {
    realm.write(() => {
      const animal = realm.objectForPrimaryKey('Animal', animalId);
      const park = realm.objectForPrimaryKey('Park', parkId);
      
      if (!animal || !park) {
        console.log('Animal or Park not found:', { animalId, parkId });
        return;
      }

      // Check if relationship already exists
      const existingRelation = realm
        .objects('ParkAnimal')
        .filtered('animal.id == $0 AND park.id == $1', animalId, parkId)[0];
      
      if (!existingRelation) {
        realm.create('ParkAnimal', {
          id: Date.now(),
          park: park,
          animal: animal,
          dateAdded: new Date(),
          isActive: true
        });
        console.log('Relationship created successfully');
      } else {
        console.log('Relationship already exists');
      }
    });
  } catch (error) {
    console.error('Error in addAnimalToPark:', error);
  }
};

// Initialize the database with sample data
export const initializeRealm = () => {
  try {
    // Delete existing realm file to ensure clean slate
    Realm.deleteFile({ path: Realm.defaultPath });
  } catch (error) {
    console.log("Error deleting Realm file:", error);
  }

  // Initialize Realm with all schemas
  const realm: Realm = new Realm({
    path: Realm.defaultPath,
    schema: [AnimalSchema, ParkSchema, ParkAnimalSchema],
    schemaVersion: 3,
    onMigration: (oldRealm: Realm, newRealm: Realm) => {
      // Migration not needed for fresh install
    },
  });

  // Initialize data
  try {
    realm.write(() => {
      // Populate parks
      initialParks.forEach(park => {
        if (!realm.objectForPrimaryKey('Park', park.id)) {
          realm.create('Park', park);
        }
      });

      // Populate animals
      initialAnimals.forEach(animal => {
        if (!realm.objectForPrimaryKey('Animal', animal.id)) {
          realm.create('Animal', animal);
        }
      });
    });
  } catch (error) {
    console.error('Error initializing data:', error);
  }

  return realm;
};

export default initializeRealm;