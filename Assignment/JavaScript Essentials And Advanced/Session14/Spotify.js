// Function to capitalize every word in song title
export function formatSongTitle(title) {

    return title
        .split(" ")
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");

}


// Function to convert seconds into mm:ss format
export function getSongDurationInMinutes(seconds) {

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

}