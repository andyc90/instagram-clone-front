import React from "react";
import "../styles/Home.css";
import Card from "../components/Card";
import Story from "../components/Story";
import Navbar from "../components/Navbar";
import Logout from "../components/Logout";
import { fetchImages } from "../utils/fetchAPI";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";

export default function Home({ user, setUser }) {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchImages();
        setImages(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="home-container">
      <Navbar
        profileImage="https://images.pexels.com/photos/11585965/pexels-photo-11585965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        profileName="Bob"
      />
      <div className="story-content">
        {[...Array(8)].map((_, index) => (
          <Story
            key={index}
            profileImage={faker.image.urlPicsumPhotos()}
            profileName={faker.internet.displayName()}
          />
        ))}
      </div>
      <div>
        {images &&
          images.map((image) => {
            return (
              <Card
                key={image.id}
                image={image.download_url}
                profileImage={faker.image.urlPicsumPhotos()}
                Location={faker.location.city()}
                profileName={faker.internet.displayName()}
              />
            );
          })}
      </div>
      {user && (
        <Logout
          user={user}
          setUser={setUser}
          profileImage="https://images.pexels.com/photos/11585965/pexels-photo-11585965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      )}
    </div>
  );
}
