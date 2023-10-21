const getFormattedDate = (mydate?:string) => {
    // let date = new Date('2023-09-07');
    let date = new Date();
    mydate ? date = new Date(mydate) : null;

    // Define the month names in French
    const monthNames = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];

    // Extract the day, month, and year from the date
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    // Generate the formatted date string
    let formattedDate = `${day} ${monthNames[month]} ${year}`;

    return formattedDate;
}

export default getFormattedDate;