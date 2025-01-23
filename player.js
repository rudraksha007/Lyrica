let currentSong = null;
function play(song){
    document.getElementById('player').play();  
    currentSong = song;  
    song.style.transition = `rotate ${document.getElementById('player').duration}s ease-in-out`;
    song.style.rotate = '8640deg';
    
}