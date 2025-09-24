import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Calendar, Users } from "lucide-react";

import mwonyothum from "@/assets/mwonyothumbnail.png"
import losingthumb from "@/assets/losingyouthumb.png";

import musicvid from "@/assets/musicvid.mov";
import musicvidthumb from "@/assets/thumbmusic.png";

import freestylevid from "@/assets/freeestyleevid.mov";
import freestylethumb from "@/assets/freeestylethumb.png";

const films = [
  {
    id: 1,
    title: "EKEHENDA MWOYO:THE BATTLE WITHIN",
    year: "2024",
    thumbnail: mwonyothum,
    description: "This experimental short film uniquely blends contemporary dance to dive into the nuanced exploration of the initial stages of depression and anxiety, creating a visually captivating and emotionally evocative narrative.",
    releaseDate: "March 15, 2024",
    crew: [
      { name: "John Director", role: "Director", social: "@johndirector" },
      { name: "Jane Producer", role: "Producer", social: "@janeproducer" },
      { name: "Mike Composer", role: "Composer", social: "@mikecomposer" }
    ],
    videoUrl: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
  },
  {
    id: 2,
    title: "LOSIN U” COVER ART SHOOT: DOCUMENTARY",
    year: "2023",
    thumbnail: losingthumb,
    description: "An intimate portrait of solitude and self-discovery by the ocean.",
    releaseDate: "June 28, 2023",
    crew: [
      { name: "Sarah Writer", role: "Writer", social: "@sarahwriter" },
      { name: "Tom Cinematographer", role: "Cinematographer", social: "@tomcine" }
    ],
    videoUrl: "https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_30fps.mp4"
  },
  {
    id: 3,
    title: "CLAVIS 7EVEN - LOSIN U [MV]",
    year: "2023",
    thumbnail: musicvidthumb,
    description: "A futuristic journey through virtual reality and human consciousness.",
    releaseDate: "July 6, 2023",
    crew: [
      { name: "Alex VFX", role: "VFX Supervisor", social: "@alexvfx" },
      { name: "Lisa Sound", role: "Sound Designer", social: "@lisasound" }
    ],
    videoUrl: musicvid
  },
  {
    id: 4,
    title: "CLAVIS 7EVEN - KING OF THE WEST FREESTYLE",
    year: "2023",
    thumbnail: freestylethumb,
    description: "A nostalgic look at aging and the beauty of forgotten moments.",
    releaseDate: "August 13, 2022",
    crew: [
      { name: "Emma Editor", role: "Editor", social: "@emmaeditor" },
      { name: "David Color", role: "Colorist", social: "@davidcolor" }
    ],
    videoUrl: freestylevid
  }
];

const FilmSection = () => {
  const [hoveredFilm, setHoveredFilm] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section className="py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-gaming text-3xl md:text-5xl font-bold mb-4 text-glow uppercase tracking-wider">
            Featured Films
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-glow to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            A collection of cinematic stories that explore the human experience through compelling narratives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {films.map((film, index) => (
            <div
              key={film.id}
              className="film-card group cursor-pointer"
              onMouseEnter={() => setHoveredFilm(film.id)}
              onMouseLeave={() => setHoveredFilm(null)}
              onClick={() => navigate(`/film/${film.id}`)}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={film.thumbnail}
                  alt={film.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-glow drop-shadow-lg" />
                </div>
                <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded text-sm font-gaming">
                  {film.year}
                </div>
              </div>
              
              <h3 className="font-gaming text-xl font-bold mb-2 text-glow uppercase tracking-wide">
                {film.title}
              </h3>
              
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {film.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default FilmSection;