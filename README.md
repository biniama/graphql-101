# Graphql-101
GraphQL Notes

All Resources can be found here: https://github.com/MoonHighway/oreilly-graphql

GraphQL Server: https://pet-library.moonhighway.com/

Code: https://github.com/MoonHighway/pet-library

#### Get Pets with Alias (available, checkedout)
```
query {
 	available: totalPets(status: AVAILABLE)
  checkedout: totalPets(status: CHECKEDOUT)
  allPets {
    name
    weight
    status
    photo {
      thumb
    }
    category
  }
}
```

#### Calling a function with argument
```
query {
  totalCustomers
  petById(id: "C-1") {
    name
    inCareOf {
      name
      currentPets {
        name
        weight
      }
    }
  }
}
```

#### Mutating
```
mutation {
  createAccount(input: {
    name: "Bini"
    username: "bini"
    password: "123"
  }) {
    name
    username
    dateCreated
  }
}
```

#### Using Fragments
```
query {
  allPets {
    ...PetDetails
  }
  petById(id: "C-1") {
    ...PetDetails
  }
}

fragment PetDetails on Pet {
  id
  name
  weight
  category
  status
  photo {
    full
    thumb
  }
}
```


### Exercise

Snowtooth Lab: https://snowtooth.moonhighway.com/
1. Write a query to get allLifts with name, elevation gain and status.
```
query {
  allLifts {
    name
    elevationGain
    status
  }
}
```

2. Extend the query to find the trails off of each of those lifts.
```
query {
  allLifts {
    name
    elevationGain
    status
    trailAccess {
      id
      name
      status
    }
  }
}
```

3. Change the status of one trail
```
mutation {
  setTrailStatus(id: "blue-bird" status: CLOSED) {
    id
    name
    status
  }
}
```

https://slides.com/moonhighway/schema-definition-language
#### GraphQL is a spec that describes:
- A Query Language
- A Schema Definition Language

##### GraphQL Scalar Types
Int
Float
String
Boolean
ID
