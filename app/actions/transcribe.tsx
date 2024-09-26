import whisper from "whisper-node";

const transcribe = async (file: File) => {
  const transcript = await whisper("example/sample.wav");

  return transcript;
};

export default transcribe;