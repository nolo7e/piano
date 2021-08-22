

document.addEventListener('keydown',function (event){
    switch (event.key){
        case 'a':
            let audio_player = document.createElement('AUDIO');
            console.log('The \'a\' key is pressed.');
            audio_player.src="sounds/A.mp3";
            audio_player.play();
            break;
        case 's':
            let audio_player1 = document.createElement('AUDIO');
            console.log('The \'s\' key is pressed.');
            audio_player1.src="sounds/S.mp3";
            audio_player1.play();
            break;
        case 'd':
            let audio_player2 = document.createElement('AUDIO');
            console.log('The \'d\' key is pressed.');
            audio_player2.src="sounds/D.mp3";
            audio_player2.play();
            break;
        case 'f':
            let audio_player3 = document.createElement('AUDIO');
            console.log('The \'f\' key is pressed.');
            audio_player3.src="sounds/F.mp3";
            audio_player3.play();
            break;
        case 'g':
            let audio_player4 = document.createElement('AUDIO');
            console.log('The \'g\' key is pressed.');
            audio_player4.src="sounds/G.mp3";
            audio_player4.play();
            break;
        case 'h':
            let audio_player5 = document.createElement('AUDIO');
            console.log('The \'h\' key is pressed.');
            audio_player5.src="sounds/H.mp3";
            audio_player5.play();
            break;
        case 'j':
            let audio_player6 = document.createElement('AUDIO');
            console.log('The \'j\' key is pressed.');
            audio_player6.src="sounds/J.mp3";
            audio_player6.play();
            break;
        case 'w':
            let audio_player7 = document.createElement('AUDIO');
            console.log('The \'w\' key is pressed.');
            audio_player7.src="sounds/W.mp3";
            audio_player7.play();
            break;
        case 'e':
            let audio_player8 = document.createElement('AUDIO');
            console.log('The \'e\' key is pressed.');
            audio_player8.src="sounds/E.mp3";
            audio_player8.play();
            break;
        case 't':
            let audio_player9 = document.createElement('AUDIO');
            console.log('The \'t\' key is pressed.');
            audio_player9.src="sounds/T.mp3";
            audio_player9.play();
            break;
        case 'y':
            let audio_player10 = document.createElement('AUDIO');
            console.log('The \'y\' key is pressed.');
            audio_player10.src="sounds/Y.mp3";
            audio_player10.play();
            break;
        case 'u':
            let audio_player11 = document.createElement('AUDIO');
            console.log('The \'u\' key is pressed.');
            audio_player11.src="sounds/U.mp3";
            audio_player11.play();
            break;
        default: console.log('UNDEFINED KEY!');
    }
});