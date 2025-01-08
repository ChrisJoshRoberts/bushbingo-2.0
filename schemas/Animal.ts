import Realm from 'realm';


// Define the Animal schema
const AnimalSchema = {
  name: 'Animal',
  properties: {
    id: 'string',
    title: 'string',
    points: 'int',
    imagePath: 'string', // Store the image path as a string
    category: 'string',
    status: 'string',
    diet: 'string',
    lifespan: 'string',
  },
  primaryKey: 'id', // Use `id` as the primary key
};

Realm.deleteFile({ schema: [AnimalSchema] });

// Prepopulate the animals
const initialAnimals = [
  {
    id: '1',
    title: 'Lion',
    points: 10,
    imagePath: '../../assets/images/animals/male-lion.png',
    category: 'Big Cats',
    status: 'Safe',
    diet: 'Carnivore',
    lifespan: '20 years',
  },
  {
    id: '2',
    title: 'Elephant',
    points: 8,
    imagePath: '../../assets/images/animals/male-elephant.png',
    category: 'Mammals',
    status: 'Protected',
    diet: 'Herbivore',
    lifespan: '60 years',
  },
  {
    id: '3',
    title: 'Giraffe',
    points: 12,
    imagePath: '../../assets/images/animals/giraffe.png',
    category: 'Mammals',
    status: 'Secure',
    diet: 'Herbivore',
    lifespan: '25 years',
  },
  {
    id: '4',
    title: 'Rhino',
    points: 15,
    imagePath: '../../assets/images/animals/rhino.png',
    category: 'Big Five',
    status: 'Protected',
    diet: 'Herbivore',
    lifespan: '40 years',
  },
  {
    id: '5',
    title: 'Zebra',
    points: 10,
    imagePath: '../../assets/images/animals/zebra.png',
    category: 'Big Five',
    status: 'Protected',
    diet: 'Herbivore',
    lifespan: '25 years',
  },
  {
    id: '6',
    title: 'Cheetah',
    points: 20,
    imagePath: '../../assets/images/animals/cheetah.png',
    category: 'Big Cats',
    status: 'Endangered',
    diet: 'Carnivore',
    lifespan: '12 years',
  },
  {
    id: '7',
    title: 'Hippo',
    points: 15,
    imagePath: '../../assets/images/animals/hippo.png',
    category: 'Mammals',
    status: 'Protected',
    diet: 'Herbivore',
    lifespan: '40 years',
  }
];

// Initialize Realm with migration logic
const realm = new Realm({
  schema: [AnimalSchema],
  schemaVersion: 1, // Increment the schema version to indicate changes
  migration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < 1) {
      const oldObjects = oldRealm.objects('Animal');
      const newObjects = newRealm.objects('Animal');

      // Migrate the schema changes
      for (let i = 0; i < oldObjects.length; i++) {
        const oldObject = oldObjects[i];
        const newObject = newObjects[i];

        // Assign a unique ID as a string for primary key
        newObject.id = oldObject.id ? String(oldObject.id) : `${i + 1}`;
        newObject.title = oldObject.name || ''; // Handle missing `name`
        newObject.imagePath = oldObject.imagePath || ''; // Default empty path
      }
    }
  },
});


// Populate data if not already present
realm.write(() => {
  const existingAnimals = realm.objects('Animal');
  if (existingAnimals.length === 0) {
    initialAnimals.forEach((animal) => realm.create('Animal', animal));
  }
});

// Export the Realm instance
export default realm;
