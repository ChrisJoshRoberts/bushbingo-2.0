import Realm from 'realm';

// First, define a basic version of Animal schema without the relationship
const AnimalSchema = {
  name: 'Animal',
  properties: {
    id: 'int',
    title: 'string',
    points: 'int',
    imagePath: 'string',
    category: 'string',
    status: 'string',
    diet: 'string',
    lifespan: 'string'
  },
  primaryKey: 'id'
};

// Define Park schema without the relationship first
const ParkSchema = {
  name: 'Park',
  properties: {
    id: 'int',
    name: 'string',
    location: 'string',
    description: 'string?'
  },
  primaryKey: 'id'
};

// Define the junction schema
const ParkAnimalSchema = {
  name: 'ParkAnimal',
  properties: {
    id: 'int',
    park: 'Park',
    animal: 'Animal',
    dateAdded: 'date',
    isActive: 'bool'
  },
  primaryKey: 'id'
};

// Now update the schemas to include the relationships
AnimalSchema.properties.parks = {
  type: 'linkingObjects',
  objectType: 'ParkAnimal',
  property: 'animal'
};

ParkSchema.properties.animals = {
  type: 'linkingObjects',
  objectType: 'ParkAnimal',
  property: 'park'
};

// Your existing initial animals data
const initialAnimals = [
  {
    id: 1,
    title: 'Lion',
    points: 10,
    imagePath: '../../assets/images/animals/male-lion.png',
    category: 'Big Cats',
    status: 'Safe',
    diet: 'Carnivore',
    lifespan: '20 years',
  },
  {
    id: 2,
    title: 'Elephant',
    points: 8,
    imagePath: '../../assets/images/animals/male-elephant.png',
    category: 'Mammals',
    status: 'Protected',
    diet: 'Herbivore',
    lifespan: '60 years',
  },
  {
    id: 3,
    title: 'Giraffe',
    points: 12,
    imagePath: '../../assets/images/animals/giraffe.png',
    category: 'Mammals',
    status: 'Secure',
    diet: 'Herbivore',
    lifespan: '25 years',
  },
  {
    id: 4,
    title: 'Rhino',
    points: 15,
    imagePath: '../../assets/images/animals/rhino.png',
    category: 'Big Five',
    status: 'Protected',
    diet: 'Herbivore',
    lifespan: '40 years',
  },
];

const initialParks = [
  {
    id: 1,
    name: 'Kruger National Park',
    location: 'Limpopo/Mpumalanga',
    description: 'A vast savanna-like environment',
    image: '../../assets/images/parks/Kruger-gate.jpg'
  },
  {
    id: 2,
    name: 'Addo Elephant Park',
    location: 'Eastern Cape',
    description: 'Protected natural habitat',
    image: '../../assets/images/parks/Addo-gate.jpeg'
  }
];

// Delete existing realm file to ensure clean slate
try {
  Realm.deleteFile({ schema: [AnimalSchema, ParkSchema, ParkAnimalSchema] });
} catch (error) {
  console.log("Error deleting Realm file:", error);
}

// Initialize Realm with all schemas
const realm = new Realm({
  schema: [AnimalSchema, ParkSchema, ParkAnimalSchema],
  schemaVersion: 3, // Incrementing schema version
  onMigration: (oldRealm, newRealm) => {
    // Migration not needed for fresh install
  },
});

// Helper functions for managing relationships
export const addAnimalToPark = (animalId, parkId) => {
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

export default realm;
export { AnimalSchema, ParkSchema, ParkAnimalSchema };