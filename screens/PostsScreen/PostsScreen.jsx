import { ScrollView } from "react-native";
import { Post } from "../../components/Post/Post";
import images from "../../assets/img/post-images/images";
import {
  Email,
  Image,
  MainContainer,
  Name,
  UserCard,
  UserInfo,
} from "./PostsScreen.styled";
import postsData from "posts.json";

export const PostsScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <MainContainer>
        <UserCard>
          <Image
            source={require("assets/img/user-images/user-img_NataliRomanova.jpg")}
          />
          <UserInfo>
            <Name>Natali Romanova</Name>
            <Email>email@example.com</Email>
          </UserInfo>
        </UserCard>
        {postsData.map(({ id, content, likes, location, comments }) => {
          return (
            <Post
              key={id}
              image={images[id]}
              description={content}
              likes={likes}
              location={location}
              comments={comments}
            />
          );
        })}
      </MainContainer>
    </ScrollView>
  );
};
