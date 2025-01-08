import Realm from 'realm';

// Animal schema
export const AnimalSchema = {
  name: 'Animal',
  properties: {
    id: 'int',
    title: 'string',
    points: 'int',
    imagePath: 'string',
    category: 'string',
    status: 'string',
    diet: 'string',
    lifespan: 'string',
    parks: {
      type: 'linkingObjects',
      objectType: 'ParkAnimal',
      property: 'animal'
    }
  },
  primaryKey: 'id'
};

// Park schema
export const ParkSchema = {
  name: 'Park',
  properties: {
    id: 'int',
    name: 'string',
    location: 'string',
    description: 'string?',
    animals: {
      type: 'linkingObjects',
      objectType: 'ParkAnimal',
      property: 'park'
    }
  },
  primaryKey: 'id'
};

// Junction schema for many-to-many relationship
export const ParkAnimalSchema = {
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