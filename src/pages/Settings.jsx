import React , {useState} from "react";
import background from "../assets/background.jpg";
import profileImg from "../assets/img.jpg";
import Header from "../components/Header";
import {
  FaDiscord,
  FaYoutube,
  FaTwitch,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Settings = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [bio, setBio] = useState('')
  const [githubUrl, setGithubUrl] = useState('')
  const [youTubeUrl, setYoutubeUrl] = useState('')
  const [twitchUrl, setTwitchUrl] = useState('')
  const [discordUrl, setDiscordUrl] = useState('')
  const [linkedInUrl, setLinkedInUrl] = useState('')


  const handleSubmit=(e)=> {
    e.preventDefault()
    console.log({name, lastName, bio, githubUrl, youTubeUrl})
  }

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen flex justify-center mt-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full w-4xl p-2">
          <div className="relative">
            <img
              className="w-full rounded-xl h-36 object-cover"
              src={background}
              alt="Background"
            />
            <div className="absolute top-24 left-4">
              <img
                className="rounded-full w-32 h-32 border-4 border-white object-cover"
                src={profileImg}
                alt="Profile"
              />
            </div>
          </div>
          <form className="mt-32  grid " action="">
            <label>Name: </label>
            <input onChange={(e) => setName(e.target.value)} className="border" type="text" placeholder="" />
            <label>Surname: </label>
            <input onChange={(e) => setLastName(e.target.value)}  className="border" type="text" placeholder="" />
            <label>Bio: </label>
            <input onChange={(e) => setBio(e.target.value)}  className="border" type="text" placeholder="" />

            <label className="flex items-center gap-2"><FaGithub/>Github: </label>
            <input onChange={(e) => setGithubUrl(e.target.value)}  className="border" type="url" placeholder="" />
            <label className="flex items-center gap-2"><FaYoutube/>YouTube: </label>
            <input onChange={(e) => setYoutubeUrl(e.target.value)}  className="border" type="url" placeholder="" />
            <label className="flex items-center gap-2"><FaLinkedin/>LinkedIn: </label>
            <input onChange={(e) => setLinkedInUrl(e.target.value)}  className="border" type="url" placeholder="" />
            <label className="flex items-center gap-2"><FaTwitch/>Twitch: </label>
            <input onChange={(e) => setTwitchUrl(e.target.value)}  className="border" type="url" placeholder="" />
            <label className="flex items-center gap-2" ><FaDiscord/>Discord: </label>
            <input onChange={(e) => setDiscordUrl(e.target.value)}  className="border" type="url" placeholder="" />
            
          </form>
          <button onClick={handleSubmit} className="border p-2 px-12 flex rounded-lg ">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Settings;
