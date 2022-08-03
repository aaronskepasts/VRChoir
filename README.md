# VRChoir

See the live demo @ https://aaronskepasts.github.io/VRChoir/

## About the project
VRChoir is a Virtual Reality experience I created using ThreeJS, in3D, Blender, and Ableton Live. This project is my first attempt at creating a VR music experience and demonstrates my ability to utilize modern technologies, my understanding of 3D geometry, and shows potential for future music 3D experiences. In this next section I will discuss the technologies I used and their role in this project. If you are interested in looking at the code, it is mainly in index.html.

### [ThreeJS](https://threejs.org/)
ThreeJS is a JavaScript Library to create animated 3D graphics in a web browser using OpenGL. ThreeJS is the foundation of this project and is used to create this 3D browser experience. What is interesting about ThreeJS vs other rendering softwares is that there is no UI and it is all code based. This has its pros and cons, and forces the developer to have a good understanding of 3D geometry and 3D space, as all of the object positions and animations are created using 3D math. The two things I would like to highlight are the uses of PositionalAudio and the VR Camera. PositionalAudio is a tool in ThreeJS where you can attach an HTML audio element to an object to hear an object from its 3D space. This paired with the easy to implement ThreeJS VR camera creates an immersive VR experience where you can actually hear the different voices from the heads from the space they are singing. This kind of technology will push the boundaries of music experiences in the near future and I am excited to continue experimenting with this concept in my development career.

### [in3D](https://in3d.io/)
in3D is a mobile app that allows you to scan yourself to easily create a 3D version of yourself. I was blown away by this software and was amazed by the quality of 3D scan from my iPhone in my university dorm room. I used this application to create the digital 3D versions of myself and my two roommates which I exported as gLTF files to edit in Blender.

### [Blender](https://www.blender.org/)
Blender is a free and open source 3D creation software. I chose to use Blender for this project over more industry standard softwares like Maya or Houdini because this was my first time using a 3D graphics software and Blender is free and has a great supportive online community. I only wanted the heads of the 3D scans from in3D so I followed YouTube tutorials on how to split meshes and was able to successfully "chop" the heads off of the original full-person scans from in3D and export them as gLTFs to use in ThreeJS.

### [Ableton Live](https://www.ableton.com/en/)
Ableton Live is my preffered choice of Digital Audio Workstation (DAW) and in this project it was used to process and pitch the audio files that the floating heads are singing. To produce the various audio samples the heads sing, I had friends send me different recordings of them singing either "Swan" or "Lee" and used the "Sampler" in Ableton to pitch them to different notes. I also added reverb that provides a sense that the heads are singing into a large open space. I then exported these audio samples as mp3's and they are "sung" by different heads in the project.

## Next Steps
This project was my first attempt to create a VR music experience and I am satisfied with the results. If I were to continue working on this project I would first add more animation. I think it would be nice to have some kind of loading animation for when the heads first enter the scene instead of just appearing out of thin air. I also would like to have added some animation to the heads themselves, like blinking or some movement in the mouth when singing to add some realism. I think there could also be a more dramatic climax, such as adding "infinite" heads surrounding the listener.  
  
My next 3D music projects will be in Unreal Engine because of its graphics quality over other popular engines. Unfortunately, I don't have the computing power now to work in Unreal but I am building a starter PC now and look forward to future building! One project idea I have is to use Unreal's new Metahuman technology to recreate Jazz concerts from the 50's and 60's of jazz legends who have since passed to give people today the ability to see John Coltrane or Miles Davis live at a historic venue like the Village Vanguard in NYC. Another idea I have is to create responsive visuals when playing music in real time, so that you can put on your VR headset and let's say play piano and different chords create different geometric patterns in front of you.  
  
I am incredibly excited by the 3D music space because it feels limitless with this upcoming technology. I think there will be revolutionary experiences whether it be amazing AR concert visuals or an interesting VR experience at home and I look forward to learning and contributing to this space.
