const getPersonAge = (birthdateText: string) => {
    let birthdate = new Date(birthdateText)
    let today = new Date();
    // Calculate the age
    let age = today.getFullYear() - birthdate.getFullYear();
    // Check if the birthdate hasn't occurred yet in the current year
    if (
    today.getMonth() < birthdate.getMonth() ||
    (today.getMonth() === birthdate.getMonth() &&
        today.getDate() < birthdate.getDate())
    ) {
        age--;
    }
    return `${age}`; // Output: The person's age based on the current date
}

export default getPersonAge;