import HeadingTwo from "./h2";

export default function Card() {
  return (
    <div className="card">
      <HeadingTwo word="hey there" />
      <p className="card-desc ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error
        distinctio natus totam laborum dolorem fugiat cumque dicta nobis
        delectus doloremque eos accusamus praesentium, temporibus veritatis
        saepe ullam eius quis!
      </p>
      <a href="/">Card link</a>
    </div>
  );
}
