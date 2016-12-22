getPonyAllergies = (ponies, ownerEmail) => {
  return ponies.filter(pony => pony.email === ownerEmail)
    .map(pony => pony.allergies)
    .reduce((total, list) => Array.from(new Set(total.concat(list))), [])
    .sort()
}

var a = getPonyAllergies([ { 'id': 427, 'name': 'Firefly', 'allergies': [ 'gluten', 'peanut' ], 'email': 'cindy@ponymail.com' }, { 'id': 23, 'name': 'Black Lightning', 'allergies': [ 'soy', 'peanut' ], 'email': 'sandy@hotmail.com' }, { 'id': 458, 'name': 'Picadilly', 'allergies': [ 'corn', 'gluten' ], 'email': 'cindy@ponymail.com' }, { 'id': 142, 'name': 'Brad', 'allergies': [ 'gluten', 'chicken' ], 'email': 'sandy@hotmail.com' }, { 'id': 184, 'name': 'Cahoot', 'allergies': [ 'soy', 'peanut', 'gluten' ], 'email': 'jimmy@ponymail.com' } ], 'sandy@hotmail.com')

console.log(a)