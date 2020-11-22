import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="card-woman">
        <a className="woman-profile" href="#">
          <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3MDU5MTEzMzM4MTQ4/marilyn_monroe_photo_alfred_eisenstaedt_pix_inc_the_life_picture_collection_getty_images_53376357_cropped.jpg" />
        </a>

        <div className="woman-name">
          <div className="title">Hero</div>
          Marilyn Monroe
        </div>
      </div>
      <div className="text">
        <p>
          Marilyn Monroe was an American actress, model, and singer. Famous for
          playing comedic "blonde bombshell" characters, she became one of the
          most popular sex symbols of the 1950s and early 1960s and was
          emblematic of the era's changing attitudes towards sexuality.
        </p>
      </div>
    </div>
  );
}