import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

import videomwonyo from "@/assets/mwonyo.mov";
import mwonyothum from "@/assets/mwonyothumbnail.png";

import losingthumb from "@/assets/losingyouthumb.png";
import videeolosing from "@/assets/losinguvid.mov";

import musicvid from "@/assets/musicvid.mov";
import musicvidthumb from "@/assets/thumbmusic.png";

import freestylevid from "@/assets/freeestyleevid.mov";
import freestylethumb from "@/assets/freeestylethumb.png";



const films = [
  {
    id: 1,
    title: "EKEHENDA MWOYO:THE BATTLE WITHIN",
    year: "2024",
    thumbnail: mwonyothum ,
    description: "A powerful journey into inner struggle, emotional resilience, and the fight for self-acceptance.",
    fullDescription: "Urban Echoes delves deep into the paradox of modern city living - how millions of people can live so close together yet feel so isolated. Through a series of interconnected vignettes, the film explores how digital technology both connects and disconnects us from genuine human experience. Shot entirely on location in major metropolitan areas, the film uses natural lighting and handheld cinematography to create an intimate, documentary-like feel that brings viewers into the heart of urban life.",
    releaseDate: "March 15, 2024",
    runtime: "4 minutes",
    genre: "Contemporary Arts, Urban Rationality",
    crew: [
      { name: "John Director", role: "Director", social: "@johndirector" },
      { name: "Jane Producer", role: "Producer", social: "@janeproducer" },
      { name: "Mike Composer", role: "Composer", social: "@mikecomposer" }
    ],
    videoUrl: videomwonyo,
    youtubeUrl: "https://www.youtube.com/watch?v=puR5EnllZ5k" 
  },
  {
    id: 2,
    title: "LOSIN U” COVER ART SHOOT: DOCUMENTARY",
    year: "2023",
    thumbnail: losingthumb,
    description: "Where creativity meets cinematography — a behind-the-scenes look at making art for music.",
    fullDescription: "This documentary peels back the curtain on the making of the cover art for “Losin U.” From early concept meetings to lighting, styling, framing, and finally the shoot itself, we follow the creative and technical process step by step. As producer and director, he orchestrates all the moving parts: coordinating artists, managing set design, tackling unexpected challenges (weather, lighting, timing), and ensuring a coherent visual narrative that matches the song. It’s playful and professional — a demonstration of teamwork, creative problem solving, and the attention to detail that turns a good cover art into something memorable.",
    releaseDate: "June 28, 2023",
    runtime: "4 minutes", 
    genre: "Documentary, Experimental",
    crew: [
      { name: "Sarah Writer", role: "Writer", social: "@sarahwriter" },
      { name: "Tom Cinematographer", role: "Cinematographer", social: "@tomcine" }
    ],
    videoUrl: videeolosing,
    youtubeUrl: "https://www.youtube.com/watch?v=QcTJpXGI0wM" 

  },
  {
    id: 3,
    title: "CLAVIS 7EVEN - LOSIN U [MV]",
    year: "2023",
    thumbnail: musicvidthumb,
    description: "A vibrant visual expression of love, loss, and artistic identity — where music, mood, and motion meet.",
    fullDescription: "In this music video, the director brings the song “Losin U” to life through a fusion of cinematic aesthetics and rhythmic storytelling. We see expressive performance shots of Clavis 7even, intercut with atmospheric visuals that echo the emotional tones of the lyrics — light and shadow, closeups, ambient scenes. Behind the scenes, as producer, he choreographs the collaboration between set design, lighting, costume, and camera movement to match the song’s dynamic shifts. The result is a music video that feels intimate yet polished — one that bolsters the artist’s message with a visual language that’s as compelling as the sound.",
    releaseDate: "July 6, 2023",
    runtime: "102 minutes",
    genre: "Sci-Fi, Thriller",
    crew: [
      { name: "Alex VFX", role: "VFX Supervisor", social: "@alexvfx" },
      { name: "Lisa Sound", role: "Sound Designer", social: "@lisasound" }
    ],
    videoUrl: musicvid,
    youtubeUrl: "https://www.youtube.com/watch?v=Brm21Rxug4A" 

  },
  {
    id: 4,
    title: "CLAVIS 7EVEN - KING OF THE WEST FREESTYLE",
    year: "2023",
    thumbnail: freestylethumb,
    description: "A lyrical visual ride through rhythm, place, and raw energy — freestyle meets frame.",
    fullDescription: "In King of the West Freestyle, the director captures a freestyle performance that’s as much about the environment and attitude as it is about skill. The film builds atmosphere with sweeping shots of urban landscapes, closeups on expression, and cuts that respond to the music’s cadence. As producer, he shapes the mood: choosing locations, directing movement, balancing performance with visual texture. Viewers feel the pulse of the street, the intensity of lyrical flow, and the way music and setting merge together to tell a story without words.",
    releaseDate: "August 3, 2022",
    runtime: "4 minutes",
    genre: "Music Video, Creativity",
    crew: [
      { name: "Emma Editor", role: "Editor", social: "@emmaeditor" },
      { name: "David Color", role: "Colorist", social: "@davidcolor" }
    ],
    videoUrl: freestylevid,
    youtubeUrl: "https://www.youtube.com/watch?v=5soFc1Myq0U" 

  }
];

const FilmDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const film = films.find(f => f.id === parseInt(id || ''));
  
  if (!film) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-pixel text-2xl text-glow mb-4">Film Not Found</h1>
          <Button onClick={() => navigate('/')} variant="outline" className="border-glow text-glow hover:bg-glow hover:text-background">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-8">
        <Button 
          onClick={() => navigate('/')} 
          variant="ghost" 
          className="text-glow hover:text-glow-intense hover:bg-glow/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Films
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative h-64 md:h-80 mb-16">
        <img 
          src={film.thumbnail}
          alt={film.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-8 left-8 lg:left-16">
          <h1 className="font-pixel text-3xl md:text-5xl text-glow mb-2 leading-relaxed">
            {film.title}
          </h1>
          <p className="text-lg text-muted-foreground font-body">
            {film.year} • {film.runtime} • {film.genre}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 lg:px-16 pb-16">
        {/* Left Side - Film Details */}
        <div className="space-y-8">
          <div>
            <h2 className="font-pixel text-xl text-glow mb-4">Synopsis</h2>
            <p className="text-foreground font-body leading-relaxed mb-4">
              {film.description}
            </p>
            <p className="text-muted-foreground font-body leading-relaxed text-sm">
              {film.fullDescription}
            </p>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <Calendar className="w-5 h-5" />
            <span className="font-body">Released: {film.releaseDate}</span>
          </div>

          <div>
            <h3 className="font-pixel text-lg text-glow mb-6 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Cast & Crew
            </h3>
            <div className="space-y-4">
              {film.crew.map((member, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center bg-card/30 border border-glow/20 p-4 rounded-lg hover:border-glow/50 transition-colors"
                >
                  <div>
                    <p className="font-body font-semibold text-foreground">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                  <a 
                    href={`https://twitter.com/${member.social.slice(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-glow hover:text-glow-intense transition-colors font-pixel text-xs flex items-center gap-1"
                  >
                    {member.social}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="relative">
          <div className="sticky top-8">
            <h3 className="font-pixel text-lg text-glow mb-4 text-center">
              Film Preview
            </h3>
            <div className="relative rounded-lg overflow-hidden border border-glow/30 shadow-2xl">
              <video
                src={film.videoUrl}
                autoPlay
                muted
                loop
                controls
                className="w-full h-auto max-h-[60vh] object-cover"
                style={{ filter: 'opacity(0.9)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
            </div>
            
            <div className="mt-6 text-center">
  <p className="text-sm text-muted-foreground font-body mb-4">
    This is a preview. Full film available on youtube link below.
  </p>
  <a 
  href={film.youtubeUrl}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="bg-glow text-background hover:bg-glow-intense font-pixel text-xs">
    Go to film
  </Button>
</a>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;