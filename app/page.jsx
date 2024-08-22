import Button from "@/components/Button";
import Heading from "@/components/Heading";
import UserCard from "@/components/UserCard";

export default function HomePage() {
  const user = {
    image:
      "https://t3.ftcdn.net/jpg/02/92/28/78/360_F_292287867_hC2Owo0yInRruYbxZXKoJZhB7YUCHdmp.jpg",
    name: "Katibe Patience",
    title: "Fullstack Developer",
  };
  return (
    <div className="">
      <h2>Welcome</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, atque?
        Eaque consequatur culpa necessitatibus odit asperiores, veniam quod
        porro voluptate accusantium dolorum explicabo, ex delectus? Fugiat
        doloribus ea dolorum minima.
      </p>
      <Heading heading="Home Page Drawned" />
      <UserCard name={user.name} title={user.title} image={user.image} />
      <Button title="Downloading PDF" />
      <a href="/users">Go to Users</a>
    </div>
  );
}
