import React, { useState } from "react";
import Button from "@/components/common/Button";
import SelectField from "@/components/common/SelectField";
import FilterIcon from "@/icons/FilterIcon";
import PlayIcon from "@/icons/PlayIcon";
import ResumeSection from "@/components/home-page/main-section/ResumeSection";
import NewSongSection from "@/components/home-page/main-section/NewSongSection";
import TopAlbumSection from "@/components/home-page/main-section/TopAlbumSection";
import ArtistSection from "@/components/home-page/main-section/ArtistSection";

const index = () => {
  const [selectedOption, setSelectedOption] = useState("All Genres");
  const options = [
    { label: "All Genres", value: "All Genres" },
    { label: "Classical", value: "Classical" },
    { label: "Dance/ Electronic", value: "Dance/ Electronic" },
    { label: "Hip-Hop/ Rap", value: "Hip-Hop/ Rap" },
    { label: "Indie/ Rock", value: "Indie/ Rock" },
    { label: "Pop", value: "Pop" },
  ];
  const [albums, setAlbums] = useState([
    {
      id: "1",
      image: "/images/album_sample_img.jpeg",
      rating: "5.0",
      title: "The Long Road",
      subtitle: "Nightrage",
      cost: "2.66",
    },
    {
      id: "2",
      image: "/images/album_sample_img.jpeg",
      rating: "5.0",
      title: "The Long Road",
      subtitle: "Nightrage",
      cost: "2.66",
    },
    {
      id: "3",
      image: "/images/album_sample_img.jpeg",
      rating: "5.0",
      title: "The Long Road",
      subtitle: "Nightrage",
      cost: "2.66",
    },
    {
      id: "4",
      image: "/images/album_sample_img.jpeg",
      rating: "5.0",
      title: "The Long Road",
      subtitle: "Nightrage",
      cost: "2.66",
    },
    {
      id: "5",
      image: "/images/album_sample_img.jpeg",
      rating: "5.0",
      title: "The Long Road",
      subtitle: "Nightrage",
      cost: "2.66",
    },
    {
      id: "6",
      image: "/images/album_sample_img.jpeg",
      rating: "5.0",
      title: "The Long Road",
      subtitle: "Nightrage",
      cost: "2.66",
    },
  ]);
  const [songs, setSongs] = useState([
    {
      id: "1",
      image: "/images/song_sample_img.jpeg",
      trackName: "Track Name",
      artistName: "Artist Name",
      price: "2.66",
    },
    {
      id: "2",
      image: "/images/song_sample_img.jpeg",
      trackName: "Track Name",
      artistName: "Artist Name",
      price: "2.66",
    },
    {
      id: "3",
      image: "/images/song_sample_img.jpeg",
      trackName: "Track Name",
      artistName: "Artist Name",
      price: "2.66",
    },
    {
      id: "4",
      image: "/images/song_sample_img.jpeg",
      trackName: "Track Name",
      artistName: "Artist Name",
      price: "2.66",
    },
    {
      id: "5",
      image: "/images/song_sample_img.jpeg",
      trackName: "Track Name",
      artistName: "Artist Name",
      price: "2.66",
    },
    {
      id: "6",
      image: "/images/song_sample_img.jpeg",
      trackName: "Track Name",
      artistName: "Artist Name",
      price: "2.66",
    },
    {
      id: "7",
      image: "/images/song_sample_img.jpeg",
      trackName: "Track Name",
      artistName: "Artist Name",
      price: "2.66",
    },
    {
      id: "8",
      image: "/images/song_sample_img.jpeg",
      trackName: "Track Name",
      artistName: "Artist Name",
      price: "2.66",
    },
    {
      id: "9",
      image: "/images/song_sample_img.jpeg",
      trackName: "Track Name",
      artistName: "Artist Name",
      price: "2.66",
    },
  ]);
  const [artists, setArtists] = useState([
    {
      id: "1",
      image: "/images/artist_sample_img.jpeg",
      name: "Jane Cooper",
      tagline: "#Singer, Producer",
      rating: "5.0",
      followers: "873.7k",
    },
    {
      id: "2",
      image: "/images/artist_sample_img.jpeg",
      name: "Jane Cooper",
      tagline: "#Singer, Producer",
      rating: "5.0",
      followers: "873.7k",
    },
    {
      id: "3",
      image: "/images/artist_sample_img.jpeg",
      name: "Jane Cooper",
      tagline: "#Singer, Producer",
      rating: "5.0",
      followers: "873.7k",
    },
    {
      id: "4",
      image: "/images/artist_sample_img.jpeg",
      name: "Jane Cooper",
      tagline: "#Singer, Producer",
      rating: "5.0",
      followers: "873.7k",
    },
    {
      id: "5",
      image: "/images/artist_sample_img.jpeg",
      name: "Jane Cooper",
      tagline: "#Singer, Producer",
      rating: "5.0",
      followers: "873.7k",
    },
    {
      id: "6",
      image: "/images/artist_sample_img.jpeg",
      name: "Jane Cooper",
      tagline: "#Singer, Producer",
      rating: "5.0",
      followers: "873.7k",
    },
  ]);

  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:pb-[32px]">
        <Button
          icon={PlayIcon}
          text={"PLAY ALL"}
          additionalClasses={
            "w-full sm:w-auto gap-[10px] sm:px-[44px] sm:py-[12px] py-[7px] bg-gradient-to-l from-[#0075FF] to-[#6A3DCB] text-white leading-[15.6px] text-[13px] font-bold sm:mb-0 mb-[20px]"
          }
        />

        <div className="flex items-center gap-[14px] sm:mb-0 mb-[20px]">
          <div className="sm:flex items-center gap-2 text-[13px] leading-[15.87px] font-medium hidden text-dark-blue">
            Sort
            <FilterIcon />
          </div>

          <SelectField
            value={selectedOption}
            options={options}
            placeholder="Choose an option"
            onChange={(value) => setSelectedOption(value)}
          />
        </div>
      </div>
      <ResumeSection albums={albums} />
      <NewSongSection songs={songs} />
      <TopAlbumSection albums={albums} />
      <ArtistSection artists={artists} />
    </>
  );
};

export default index;
