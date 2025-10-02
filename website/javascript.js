pets = ["dog", "cat"]
pet_xp = [0, 0]
function pet_xp(pet, xp_increase) {
    pet_increased = pets.index(pet)
    pet_xp[pet_increased] += xp_increase
}
function feedPet(pet) {
    pet_xp(pet, 100)
}

function playWithPet(pet) {
    pet_xp(pet, 100)
}

function sleepPet(pet) {
    pet_xp(pet, 100)
}