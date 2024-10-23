const Medee = () => {
      return (
        <div
          className="contact-container"
          style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
        >
          <div>
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            ></div>

            <div>
              <h3>Address</h3>
              <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>313-332-8662</p>
              <p>info@email.com</p>
            </div>
          </div>

          <h3>Leave a Message</h3>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "500px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              style={{ padding: "10px", margin: "5px 0" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              style={{ padding: "10px", margin: "5px 0" }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              style={{ padding: "10px", margin: "5px 0" }}
            />
            <textarea
              name="message"
              placeholder="Write a message"
              style={{ padding: "10px", margin: "5px 0", minHeight: "100px" }}
              required
            />
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      );
}
export default Medee;