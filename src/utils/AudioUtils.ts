function padTime(time: number) {
    return String(time).padStart(2, "0");
}

function padMiliseconds(time: number) {
    return String(time).padStart(3, "0");
}

export function formatAudioTimestamp(time: number) {
    const hours = (time / (60 * 60)) | 0;
    time -= hours * (60 * 60);
    const minutes = (time / 60) | 0;
    time -= minutes * 60;
    const seconds = time | 0;
    time -= seconds;
    const milliseconds = Math.round(time * 1000);

    return `${hours ? padTime(hours) + ":" : ""}${padTime(minutes)}:${padTime(
        seconds,
    )},${padMiliseconds(milliseconds)}`;
}
