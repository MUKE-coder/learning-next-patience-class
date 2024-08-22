import UserCard from "@/components/UserCard";

export default function UsersPage() {
  const users = [
    {
      image:
        "https://t3.ftcdn.net/jpg/02/92/28/78/360_F_292287867_hC2Owo0yInRruYbxZXKoJZhB7YUCHdmp.jpg",
      name: "Katibe Patience",
      title: "Fullstack Developer",
    },
    {
      image:
        "https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg",
      name: "Samuel Jackson",
      title: "Fullstack Developer",
    },
    {
      image:
        "https://www.askinclinic.co.uk/wp-content/uploads/2020/02/Beautiful-Woman-11-scaled.jpg",
      name: "Tracy T",
      title: "Fullstack Developer",
    },
    {
      image:
        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid",
      name: "Benita T",
      title: "Fullstack Developer",
    },
  ];

  return (
    <section>
      <h2>Users</h2>

      <div className="cards">
        {users.map((user) => {
          return (
            <UserCard name={user.name} title={user.title} image={user.image} />
          );
        })}
      </div>
    </section>
  );
}
