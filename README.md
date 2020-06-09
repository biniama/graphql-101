# Graphql-101
GraphQL Notes

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
