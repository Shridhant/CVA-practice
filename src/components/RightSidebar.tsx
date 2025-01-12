import { Dialog } from "./Dialog";
const Items = [
  {
    id: 1,
    title: "News 1",
    subject: "Focus on rhythm and timing",
    content: `In the world of music production, rhythm and timing are fundamental elements that can make or break a track. Whether you're a beginner or an experienced producer, honing these skills is crucial for creating compelling and professional-sounding music.

Rhythm is the heartbeat of your track. It's what makes people want to move, dance, or simply tap their feet. Good rhythm isn't just about keeping time; it's about creating a groove that feels natural and engaging. This involves understanding syncopation, polyrhythms, and how different rhythmic elements interact with each other.

Timing, on the other hand, is about precision. It's ensuring that every element in your track lands exactly where it should. This includes quantizing your MIDI notes, aligning your audio clips, and even considering the timing of your effects and automation.

To improve your rhythm and timing:

1. Practice with a metronome regularly.
2. Study the rhythms in different genres of music.
3. Experiment with groove templates in your DAW.
4. Pay attention to the interplay between different instruments.
5. Use your DAW's timing correction tools, but don't rely on them entirely.

Remember, while technical precision is important, music should also feel human and alive. Don't be afraid to leave some imperfections if they contribute to the overall groove of your track. The key is to find the right balance between tight, precise timing and natural, flowing rhythm.`,
  },
  {
    id: 2,
    title: "News 2",
    subject: "Exploring new sound design techniques",
    content: `Sound design is an art form that's constantly evolving, and staying on top of new techniques can help you create unique and captivating sounds for your music. In this article, we'll explore some cutting-edge sound design techniques that you can incorporate into your production workflow.

1. Granular Synthesis: This technique involves breaking down audio samples into tiny grains and reassembling them in various ways. It can create textures ranging from smooth and ethereal to glitchy and chaotic.

2. Wavetable Synthesis: While not new, wavetable synthesis has seen a resurgence in popularity. Modern wavetable synths offer incredible flexibility, allowing you to morph between different waveforms and create complex, evolving sounds.

3. Convolution Processing: Typically used for reverb, convolution can also be used creatively to impart the characteristics of one sound onto another. Try convolving synth sounds with found sounds for unique textures.

4. Spectral Processing: Tools that allow you to manipulate the spectral content of a sound open up new possibilities for sound design. You can reshape harmonics, remove or isolate specific frequencies, or even combine the spectral characteristics of different sounds.

5. Physical Modeling: This synthesis technique simulates the physical properties of acoustic instruments or imaginary objects. It can create incredibly realistic or completely otherworldly sounds.

6. AI-Assisted Sound Design: Machine learning algorithms are being used to generate new sounds or to help classify and organize sound libraries, making the sound design process more efficient.

Remember, the key to effective sound design is experimentation. Don't be afraid to combine these techniques or to use them in unconventional ways. The most interesting sounds often come from happy accidents or pushing tools beyond their intended use.

As you explore these techniques, always keep your musical goals in mind. The best sound design serves the song, enhancing the emotional impact and supporting the overall vision of your music.`,
  },
];

const RightSidebar = () => {
  return (
    <div className="hidden lg:block w-80 p-4 overflow-y-auto">
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <h2 className="text-lg sm:text-xl font-semibold leading-snug mb-4">
          News
        </h2>
        {Items.map((item) => (
          <Dialog key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
