# Import the AudioSegment class for processing audio
from pydub import AudioSegment

# Load the audio file
audio = AudioSegment.from_file("../audio_files_mp3/How_to_Speak_(320 kbps).mp3")

# Define the duration of each segment in milliseconds (60 seconds = 60,000 milliseconds)
segment_duration = 60000

# Iterate over the audio segments
for i, segment in enumerate(audio[::segment_duration]):
    # Adjust the end time of the last segment to match the audio length
    if i == len(audio) // segment_duration:
        segment = segment[:len(audio) % segment_duration]
    # Export the segment as a separate mp3 file
    segment.export(f"../audio_files_mp3/cut/new/How_to_Speak_(320 kbps)_{i}.mp3")

print("Audio segmented successfully.")
