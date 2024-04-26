import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={styles.section}>
      <div>
        <header>
          <h1>Welcome to Our Camping Community!</h1>
        </header>
        <main>
          <section>
            <h2>About Us</h2>
            <p>
              We are passionate campers who love exploring the great outdoors.
              Our community is dedicated to sharing experiences, tips, and
              adventures with fellow campers.
            </p>
          </section>
          <section>
            <h2>Join Us</h2>
            <p>
              Sign up now to become a member of our camping community! Gain
              access to exclusive offers, insider tips, and connect with other
              outdoor enthusiasts.
            </p>
          </section>
          <section>
            <h2>Explore</h2>
            <p>
              Start planning your next camping trip with our resources. Discover
              new destinations, find camping gear recommendations, and learn
              valuable camping hacks.
            </p>
          </section>
        </main>
        <footer>
          <p>&copy; 2024 Camping Community. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
