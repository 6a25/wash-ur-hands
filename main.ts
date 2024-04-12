input.onGesture(Gesture.FreeFall, function () {
    music.setVolume(255)
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", music.volume()), music.PlaybackMode.LoopingInBackground)
    music.play(music.stringPlayable("F G F G F G F G ", music.volume()), music.PlaybackMode.LoopingInBackground)
    music.play(music.stringPlayable("G A G A G A G A ", music.volume()), music.PlaybackMode.LoopingInBackground)
    music.play(music.stringPlayable("A B A B A B A B ", music.volume()), music.PlaybackMode.LoopingInBackground)
    music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", music.volume()), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        . . . . .
        # . # . #
        `)
})
