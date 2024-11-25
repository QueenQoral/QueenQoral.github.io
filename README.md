import os
import pygame
from tkinter import Tk, Frame, Button, filedialog, Label

class MusicPlayer:
    def __init__(self, master):
        self.master = master
        master.title("Music Player")
        master.geometry("300x150")

        self.is_playing = False
        self.current_song = ""

        self.label = Label(master, text="Music Player")
        self.label.pack()

        self.play_button = Button(master, text="Play", command=self.play_song)
        self.play_button.pack()

        self.stop_button = Button(master, text="Stop", command=self.stop_song)
        self.stop_button.pack()

        self.load_button = Button(master, text="Load", command=self.load_song)
        self.load_button.pack()

        pygame.mixer.init()

    def load_song(self):
        self.current_song = filedialog.askopenfilename(filetypes=[("Audio Files", "*.mp3;*.wav")])
        if self.current_song:
            self.label.config(text=os.path.basename(self.current_song))

    def play_song(self):
        if self.current_song and not self.is_playing:
            pygame.mixer.music.load(self.current_song)
            pygame.mixer.music.play()
            self.is_playing = True

    def stop_song(self):
        if self.is_playing:
            pygame.mixer.music.stop()
            self.is_playing = False

if __name__ == "__main__":
    root = Tk()
    music_player = MusicPlayer(root)
    root.mainloop()
