import { useEffect, useRef, useState } from "react";
import "./welcome.css";

type IconName =
  | "discover"
  | "search"
  | "library"
  | "heart"
  | "headphones"
  | "plus"
  | "arrow"
  | "chevron"
  | "play"
  | "pause"
  | "back"
  | "forward"
  | "volume"
  | "repeat"
  | "close"
  | "check"
  | "clock"
  | "star"
  | "sun"
  | "bell";
function Icon({
  name,
  size = 20,
  fill = false,
}: {
  name: IconName;
  size?: number;
  fill?: boolean;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    discover: (
      <>
        <path d="m16 8-3 5-5 3 3-5 5-3Z" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 4 4" />
      </>
    ),
    library: (
      <>
        <path d="M4 4v16M9 4v16M14 4v16M18 4l4 15" />
      </>
    ),
    heart: (
      <path d="M20.5 4.8a5.3 5.3 0 0 0-7.5 0l-1 1-1-1a5.3 5.3 0 0 0-7.5 7.5L12 21l8.5-8.7a5.3 5.3 0 0 0 0-7.5Z" />
    ),
    headphones: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <rect x="3" y="11" width="4" height="9" rx="2" />
        <rect x="17" y="11" width="4" height="9" rx="2" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
    chevron: <path d="m9 5 7 7-7 7" />,
    play: <path d="m9 5 11 7-11 7V5Z" />,
    pause: (
      <>
        <path d="M8 5v14M16 5v14" />
      </>
    ),
    back: (
      <>
        <path d="M4 9a8 8 0 1 1 0 7M4 3v6h6" />
        <text x="8" y="15" fontSize="8" strokeWidth=".5">
          15
        </text>
      </>
    ),
    forward: (
      <>
        <path d="M20 9a8 8 0 1 0 0 7M20 3v6h-6" />
        <text x="8" y="15" fontSize="8" strokeWidth=".5">
          15
        </text>
      </>
    ),
    volume: (
      <>
        <path d="m11 4-6 5H2v6h3l6 5V4ZM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
      </>
    ),
    repeat: (
      <>
        <path d="M4 8h15l-3-3M20 16H5l3 3M20 8v3M4 16v-3" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 1v2m0 18v2M1 12h2m18 0h2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </>
    ),
    bell: (
      <>
        <path d="M5 9a7 7 0 0 1 14 0v6l2 3H3l2-3V9ZM9 21h6" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

type Book = {
  id: number;
  title: string;
  author: string;
  category: string;
  rating: string;
  duration: string;
  style: string;
  tag?: string;
  description: string;
};
const books: Book[] = [
  {
    id: 1,
    title: "The Creative Act",
    author: "Rick Rubin",
    category: "Personal growth",
    rating: "4.9",
    duration: "5h 45m",
    style: "creative",
    tag: "EDITOR’S PICK",
    description:
      "Creativity is not a rare ability. It is a way of being. Explore a generous, inspiring perspective on finding your voice, paying attention, and living a more creative life.",
  },
  {
    id: 2,
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "Fiction",
    rating: "4.8",
    duration: "8h 50m",
    style: "midnight",
    description:
      "Between life and death there is a library, and within that library, the shelves go on forever. A moving story about possibility, second chances, and what makes life worth living.",
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Personal growth",
    rating: "4.9",
    duration: "5h 35m",
    style: "atomic",
    tag: "POPULAR",
    description:
      "Tiny changes, remarkable results. Discover a practical approach to building better habits, breaking the ones that hold you back, and getting a little better every day.",
  },
  {
    id: 4,
    title: "The Mountain Is You",
    author: "Brianna Wiest",
    category: "Mindfulness",
    rating: "4.8",
    duration: "5h 44m",
    style: "mountain",
    description:
      "A thoughtful exploration of self-sabotage and the journey toward self-mastery. Learn to understand your patterns and make room for the person you want to become.",
  },
  {
    id: 5,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Business",
    rating: "4.9",
    duration: "5h 48m",
    style: "money",
    description:
      "Timeless lessons on wealth, greed, and happiness. Explore how our personal stories shape the financial decisions we make, and why doing well with money is about how we behave.",
  },
  {
    id: 6,
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    category: "Fiction",
    rating: "4.7",
    duration: "6h 30m",
    style: "coffee",
    description:
      "In a small Tokyo café, a cup of coffee offers an extraordinary opportunity to travel back in time. Four visitors discover what they would say if they had one more chance.",
  },
  {
    id: 7,
    title: "Ikigai",
    author: "Héctor García",
    category: "Mindfulness",
    rating: "4.8",
    duration: "3h 23m",
    style: "ikigai",
    description:
      "Find the small joys and everyday purpose that make life meaningful. A gentle introduction to the Japanese secret to a long and happy life.",
  },
  {
    id: 8,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Business",
    rating: "4.8",
    duration: "7h 44m",
    style: "deep",
    description:
      "Rediscover the quiet power of focus in a distracted world. Make space for meaningful work and build a life with more intention.",
  },
];
const categories = ["For you", "Fiction", "Personal growth", "Business", "Mindfulness"];
const timeLabel = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

function Cover({ book, small = false }: { book: Book; small?: boolean }) {
  return (
    <div className={`book-cover ${book.style} ${small ? "small-cover" : ""}`}>
      <div className="cover-text">
        {book.style === "creative" && <span className="cover-kicker">A WAY OF BEING</span>}
        <strong>{book.title}</strong>
        {book.style === "atomic" && (
          <span className="cover-subtitle">
            Tiny Changes,
            <br />
            Remarkable Results
          </span>
        )}
        {book.style === "money" && (
          <span className="cover-subtitle">
            Timeless lessons on wealth,
            <br />
            greed, and happiness
          </span>
        )}
      </div>
      <div className="cover-art">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <span className="cover-author">{book.author}</span>
      <span className="cover-audio">
        <Icon name="headphones" size={12} />
      </span>
    </div>
  );
}

function WelcomePage({ onExplore }: { onExplore: (book?: Book) => void }) {
  const [signInOpen, setSignInOpen] = useState(false);
  const signInButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const exploreButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!signInOpen) return;
    closeButton.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSignInOpen(false);
      if (event.key === "Tab") {
        if (event.shiftKey && document.activeElement === closeButton.current) {
          event.preventDefault();
          exploreButton.current?.focus();
        } else if (!event.shiftKey && document.activeElement === exploreButton.current) {
          event.preventDefault();
          closeButton.current?.focus();
        }
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
      signInButton.current?.focus();
    };
  }, [signInOpen]);

  return (
    <div className="welcome-page">
      <a className="welcome-skip" href="#welcome-main">
        Skip to content
      </a>
      <header className="welcome-header">
        <a className="brand" href="#welcome-main" aria-label="Audiio home">
          <span className="brand-symbol">
            <i />
            <i />
            <i />
            <i />
          </span>
          audiio<span className="brand-dot">.</span>
        </a>
        <nav className="welcome-nav" aria-label="Welcome navigation">
          <a href="#welcome-books">The collection</a>
          <a href="#welcome-how">The audiio feeling</a>
          <a href="#welcome-start">Your next chapter</a>
        </nav>
        <div className="welcome-header-actions">
          <button ref={signInButton} className="welcome-signin" onClick={() => setSignInOpen(true)}>
            Sign in
          </button>
          <button className="primary-button" onClick={() => onExplore()}>
            Start exploring <Icon name="arrow" size={16} />
          </button>
        </div>
      </header>
      <main id="welcome-main">
        <section className="welcome-hero">
          <div className="welcome-hero-copy">
            <span className="welcome-pill">
              <span /> A LITTLE LESS NOISE. A LITTLE MORE YOU.
            </span>
            <h1>
              Life sounds <br />
              better with
              <br />
              <em>a good story.</em>
            </h1>
            <p>
              Escape into another world. Fall in love with a new idea.
              <br className="welcome-desktop-break" /> Make a little room for something wonderful.
            </p>
            <div className="welcome-hero-actions">
              <button className="primary-button" onClick={() => onExplore()}>
                Find your next chapter <Icon name="arrow" size={18} />
              </button>
              <a className="welcome-preview-link" href="#welcome-books">
                <span>
                  <Icon name="play" size={13} fill />
                </span>{" "}
                A taste of what’s inside
              </a>
            </div>
            <div className="welcome-hero-note">
              <Icon name="check" size={14} />
              <span>Explore freely. No account or payment needed.</span>
            </div>
            <div className="welcome-values">
              <span>Curated with care</span>
              <i />
              <span>Listen at your pace</span>
              <i />
              <span>Made for your everyday</span>
            </div>
          </div>
          <div className="welcome-visual">
            <div className="welcome-visual-orbit" aria-hidden="true" />
            <div className="welcome-photo">
              <img
                src="/images/listening-hero.png"
                alt="A listener closing her eyes and enjoying a story in lavender headphones"
              />
            </div>
            <div className="welcome-photo-caption">
              <span className="sound-bars">
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>{" "}
              A whole world. Just press play.
            </div>
            <div className="welcome-floating-book">
              <div className="welcome-mini-cover">
                <Cover book={books[0]} small />
              </div>
              <div>
                <small>YOUR NEXT LITTLE OBSESSION</small>
                <strong>The Creative Act</strong>
                <span>Rick Rubin</span>
                <div className="welcome-mini-progress">
                  <i />
                </div>
              </div>
              <button
                className="main-play-button"
                onClick={() => onExplore(books[0])}
                aria-label="Explore The Creative Act"
              >
                <Icon name="play" size={15} fill />
              </button>
            </div>
            <span className="welcome-visual-star" aria-hidden="true">
              ✳
            </span>
          </div>
        </section>
        <div className="welcome-manifesto">
          <span>FOR THE CURIOUS. THE DREAMERS. THE “ONE MORE CHAPTER” PEOPLE.</span>
          <p>
            Not just something to listen to. <em>Something to feel.</em>
          </p>
        </div>
        <section className="welcome-picks" id="welcome-books" aria-labelledby="welcome-books-title">
          <div className="welcome-section-heading">
            <div>
              <span className="eyebrow">GOOD STORIES HAVE A WAY OF FINDING YOU</span>
              <h2 id="welcome-books-title">
                Meet your next <em>great listen.</em>
              </h2>
            </div>
            <button className="text-button" onClick={() => onExplore()}>
              Explore the collection <Icon name="arrow" size={17} />
            </button>
          </div>
          <div className="welcome-book-rail">
            {books.slice(0, 5).map((book) => (
              <button
                className="welcome-book"
                key={book.id}
                onClick={() => onExplore(book)}
                aria-label={`Explore ${book.title} by ${book.author}`}
              >
                <div className="welcome-book-cover">
                  <Cover book={book} />
                  <span className="welcome-cover-play">
                    <Icon name="play" size={18} fill />
                  </span>
                </div>
                <span className="welcome-book-category">{book.category}</span>
                <strong>{book.title}</strong>
                <span className="welcome-book-author">{book.author}</span>
                <span className="welcome-book-rating">
                  <Icon name="star" size={11} fill />
                  {book.rating}
                  <i />
                  {book.duration}
                </span>
              </button>
            ))}
          </div>
        </section>
        <section className="welcome-how" id="welcome-how" aria-labelledby="welcome-how-title">
          <div className="welcome-section-heading">
            <div>
              <span className="eyebrow">IT’S THE LITTLE MOMENTS</span>
              <h2 id="welcome-how-title">
                Make the everyday <em>extraordinary.</em>
              </h2>
            </div>
            <p>
              For your morning walk, your slow Sunday,
              <br />
              and all the little in-betweens.
            </p>
          </div>
          <div className="welcome-benefits">
            {(
              [
                {
                  icon: "discover",
                  title: "Follow your curiosity",
                  text: "Big ideas, beautiful fiction, and fresh perspectives. There’s a story for every side of you.",
                  tone: "violet",
                },
                {
                  icon: "headphones",
                  title: "Find your own rhythm",
                  text: "Press play on a preview, find your favorite voice, and make listening a little ritual.",
                  tone: "peach",
                },
                {
                  icon: "heart",
                  title: "Keep what moves you",
                  text: "Collect the books you love and make a little space for the ones you can’t wait to discover.",
                  tone: "sage",
                },
              ] as { icon: IconName; title: string; text: string; tone: string }[]
            ).map((item) => (
              <article className={`welcome-benefit benefit-${item.tone}`} key={item.title}>
                <span className="welcome-benefit-icon">
                  <Icon name={item.icon} size={25} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="welcome-invitation" id="welcome-start">
          <span className="welcome-invitation-orbit" aria-hidden="true" />
          <span className="eyebrow">YOUR NEXT CHAPTER IS WAITING</span>
          <h2>
            Somewhere wonderful
            <br />
            is just <em>a listen away.</em>
          </h2>
          <p>Come as you are. Find a story that stays with you.</p>
          <button className="primary-button" onClick={() => onExplore()}>
            Step into audiio <Icon name="arrow" size={18} />
          </button>
          <small>Free to explore. No sign-up needed for this preview.</small>
        </section>
      </main>
      <footer className="welcome-footer">
        <a href="#welcome-main" className="brand">
          audiio<span className="brand-dot">.</span>
        </a>
        <span>Less noise. More stories.</span>
        <span>© {new Date().getFullYear()} Audiio. A little world of audio.</span>
        <a href="#welcome-main">
          Back to the top <Icon name="arrow" size={14} />
        </a>
      </footer>
      {signInOpen && (
        <div className="modal-overlay" onClick={() => setSignInOpen(false)}>
          <section
            className="modal simple-modal welcome-signin-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="welcome-signin-title"
            aria-describedby="welcome-signin-description"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButton}
              className="modal-close icon-button"
              aria-label="Close sign-in information"
              onClick={() => setSignInOpen(false)}
            >
              <Icon name="close" />
            </button>
            <span className="modal-symbol">
              <Icon name="headphones" size={30} />
            </span>
            <span className="eyebrow">YOUR LITTLE WORLD OF AUDIO</span>
            <h2 id="welcome-signin-title">
              Welcome to your
              <br />
              next chapter.
            </h2>
            <p id="welcome-signin-description">
              Accounts aren’t available in this preview yet. For now, make yourself at home and
              explore the listening experience as a guest.
            </p>
            <button ref={exploreButton} className="primary-button" onClick={() => onExplore()}>
              Continue as a guest <Icon name="arrow" size={17} />
            </button>
            <small>No account, password, or payment needed.</small>
          </section>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<"welcome" | "library">("welcome");
  const [page, setPage] = useState("Discover");
  const [category, setCategory] = useState("For you");
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([4]);
  const [library, setLibrary] = useState<number[]>([1, 4]);
  const [current, setCurrent] = useState(books[0]);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [speed, setSpeed] = useState(1);
  const [selected, setSelected] = useState<Book | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [toast, setToast] = useState("");
  const [collectionModal, setCollectionModal] = useState(false);
  const [collectionName, setCollectionName] = useState("");
  const [collections, setCollections] = useState(["My daily inspiration", "A little escape"]);
  const [premium, setPremium] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const appRef = useRef<HTMLDivElement>(null);
  const speech = useRef<SpeechSynthesisUtterance | null>(null);
  const speedRef = useRef(speed);
  speedRef.current = speed;
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => setProgress((p) => Math.min(1575, p + speedRef.current)), 1000);
    return () => clearInterval(timer);
  }, [playing]);
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 3200);
      return () => clearTimeout(timer);
    }
  }, [toast]);
  useEffect(() => () => window.speechSynthesis?.cancel(), []);
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;

    const elements = appRef.current?.querySelectorAll<HTMLElement>(
      ".greeting, .hero-card, .continue-card, .section-header, .category-tabs, .book-card, .mood-section, .bottom-features, .welcome-hero-copy, .welcome-visual, .welcome-picks, .welcome-how, .welcome-invitation",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );
    elements?.forEach((element, index) => {
      if (element.classList.contains("is-visible")) return;
      element.style.setProperty("--reveal-delay", `${(index % 5) * 45}ms`);
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, [screen, page, category, query, showAll, favorites, library]);
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
        setPremium(false);
        setCollectionModal(false);
        setSearchOpen(false);
        setNotifications(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  function startAudio(book: Book, restart = false) {
    if (!("speechSynthesis" in window)) {
      setToast("Audio previews are not supported in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(
      `Welcome to your Audiio preview of ${book.title}, by ${book.author}. ${book.description} Take a breath. Settle into your favorite spot, and let a new perspective find you. This is where your next chapter begins. Explore this title in your library, and make a little space for a great story today.`,
    );
    utterance.rate = speed;
    utterance.volume = volume / 100;
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);
    speech.current = utterance;
    window.speechSynthesis.speak(utterance);
    setCurrent(book);
    setPlaying(true);
    if (restart || current.id !== book.id) setProgress(0);
  }
  function togglePlay() {
    if (playing) {
      window.speechSynthesis?.pause();
      setPlaying(false);
    } else if (window.speechSynthesis?.paused) {
      window.speechSynthesis.resume();
      setPlaying(true);
    } else startAudio(current);
  }
  function navigate(destination: string) {
    setPage(destination);
    setCategory("For you");
    setQuery("");
    setShowAll(false);
  }
  function toggleFavorite(id: number) {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }
  const filtered = books.filter(
    (book) =>
      (category === "For you" || book.category === category) &&
      (!query || `${book.title} ${book.author}`.toLowerCase().includes(query.toLowerCase())) &&
      (page !== "Favorites" || favorites.includes(book.id)) &&
      (page !== "My library" || library.includes(book.id)) &&
      (!collections.includes(page) || library.includes(book.id)),
  );
  const displayed =
    showAll || query || page !== "Discover" || category !== "For you"
      ? filtered
      : filtered.slice(0, 5);

  function returnToWelcome() {
    window.speechSynthesis?.cancel();
    setPlaying(false);
    setSelected(null);
    setScreen("welcome");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  if (screen === "welcome") {
    return (
      <div ref={appRef}>
        <WelcomePage
          onExplore={(book) => {
            setScreen("library");
            navigate("Discover");
            setSelected(book ?? null);
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
        />
      </div>
    );
  }

  return (
    <div ref={appRef} className={`app-shell ${playing ? "is-playing" : ""}`}>
      <aside className="sidebar">
        <a
          className="brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            returnToWelcome();
          }}
        >
          <span className="brand-symbol">
            <i />
            <i />
            <i />
            <i />
          </span>
          audiio<span className="brand-dot">.</span>
        </a>
        <div className="sidebar-content">
          <div className="nav-label">YOUR LITTLE WORLD OF AUDIO</div>
          <nav className="main-nav" aria-label="Main navigation">
            {(
              [
                ["Discover", "discover"],
                ["My library", "library"],
                ["Favorites", "heart"],
              ] as [string, IconName][]
            ).map(([label, icon]) => (
              <button
                key={label}
                className={page === label ? "nav-item active" : "nav-item"}
                onClick={() => navigate(label)}
              >
                <Icon name={icon} />
                <span>{label}</span>
                {label === "Favorites" && <span className="nav-count">{favorites.length}</span>}
              </button>
            ))}
          </nav>
          <div className="collection-heading">
            <span className="nav-label">MY COLLECTIONS</span>
            <button
              className="icon-button"
              aria-label="Create collection"
              onClick={() => setCollectionModal(true)}
            >
              <Icon name="plus" size={16} />
            </button>
          </div>
          {collections.map((collection, i) => (
            <button
              key={collection}
              className={`collection-item ${page === collection ? "selected" : ""}`}
              onClick={() => navigate(collection)}
            >
              <span className={`collection-dot dot-${i % 3}`} />
              {collection}
            </button>
          ))}
          <button className="new-collection" onClick={() => setCollectionModal(true)}>
            <Icon name="plus" size={15} /> Create collection
          </button>
        </div>
        <div className="sidebar-promo">
          <div className="promo-art">
            <span />
            <Icon name="headphones" size={35} />
            <i />
          </div>
          <h3>A world without limits.</h3>
          <p>
            More stories. More you.
            <br />
            Unlock unlimited listening.
          </p>
          <button onClick={() => setPremium(true)}>
            Explore Premium <Icon name="arrow" size={16} />
          </button>
          <small>Good stories are worth it.</small>
        </div>
        <button className="profile" onClick={returnToWelcome}>
          <span className="avatar">G</span>
          <span>
            <strong>Guest listener</strong>
            <small>Back to welcome</small>
          </span>
          <Icon name="chevron" size={16} />
        </button>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            Your next chapter starts here <span className="tiny-spark">✧</span>
          </div>
          <a
            className="mobile-brand brand"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              returnToWelcome();
            }}
          >
            audiio<span className="brand-dot">.</span>
          </a>
          <div className="header-actions">
            <div className={`search-box ${searchOpen ? "open" : ""}`}>
              <Icon name="search" size={18} />
              <input
                aria-label="Search audiobooks"
                placeholder="Search books, authors..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage("Discover");
                }}
                onFocus={() => setSearchOpen(true)}
              />
              <span className="search-shortcut">⌘ K</span>
            </div>
            <button
              className="icon-button mobile-search"
              aria-label="Search"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Icon name="search" />
            </button>
            <div className="notification-wrap">
              <button
                className="notification-button icon-button"
                aria-label="Notifications"
                onClick={() => setNotifications(!notifications)}
              >
                <Icon name="bell" />
                <i />
              </button>
              {notifications && (
                <div className="notification-popover">
                  <strong>A little listening inspiration</strong>
                  <p>Your next favorite is waiting. Explore this week’s editor’s picks below.</p>
                  <button
                    onClick={() => {
                      navigate("Discover");
                      setNotifications(false);
                    }}
                  >
                    Discover something new <Icon name="arrow" size={15} />
                  </button>
                </div>
              )}
            </div>
            <span className="header-avatar avatar" aria-label="Browsing as a guest">
              G
            </span>
          </div>
        </header>
        {searchOpen && (
          <div className="mobile-search-field">
            <Icon name="search" size={18} />
            <input
              aria-label="Search books on mobile"
              autoFocus
              placeholder="Find your next great listen..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage("Discover");
              }}
            />
            <button
              className="icon-button"
              onClick={() => {
                setSearchOpen(false);
                setQuery("");
              }}
              aria-label="Close search"
            >
              <Icon name="close" size={18} />
            </button>
          </div>
        )}

        <div className="page-content">
          <section className="greeting">
            <div>
              <div className="eyebrow">
                <span className="sun-icon">
                  <Icon name="sun" size={15} />
                </span>{" "}
                A LITTLE TIME, JUST FOR YOU
              </div>
              <h1>
                {page === "Discover" ? (
                  <>
                    Welcome, curious mind <span className="greeting-star">✳</span>
                  </>
                ) : (
                  page
                )}
              </h1>
              <p>
                {page === "Discover"
                  ? "Big ideas, beautiful stories. Find your next great listen."
                  : page === "Favorites"
                    ? "All the stories that have a special place in your heart."
                    : "Your favorite voices, always within reach."}
              </p>
            </div>
            <div className="listening-streak">
              <span className="streak-icon">
                <Icon name="headphones" size={20} />
              </span>
              <div>
                <strong>Keep your curiosity going</strong>
                <span>A little listening goes a long way.</span>
              </div>
            </div>
          </section>

          {page === "Discover" && !query && (
            <section className="feature-row">
              <div className="hero-card">
                <img
                  src="/images/listening-hero.png"
                  alt="A woman enjoying an audiobook with lavender headphones"
                />
                <div className="hero-tint" />
                <div className="hero-content">
                  <span className="hero-badge">
                    <span />
                    YOUR EVERYDAY, A LITTLE EXTRAORDINARY
                  </span>
                  <h2>
                    Stories to get
                    <br />
                    <span>lost in.</span>
                  </h2>
                  <p>
                    Slow down. Tune in. Drift somewhere new.
                    <br />
                    There’s a whole world in your headphones.
                  </p>
                  <button
                    className="primary-button"
                    onClick={() => {
                      setCategory("Fiction");
                      document
                        .getElementById("book-section")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    Discover your next chapter <Icon name="arrow" size={17} />
                  </button>
                  <div className="hero-footnote">
                    <div className="mini-avatars">
                      <span>J</span>
                      <span>M</span>
                      <span>S</span>
                    </div>
                    <span>Join 20k+ curious minds</span>
                  </div>
                </div>
                <div className="hero-floating-note">
                  <span className="sound-bars">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>{" "}
                  A good story changes everything.
                </div>
              </div>
              <div className="continue-card">
                <div className="continue-top">
                  <span>BACK TO YOUR STORY</span>
                  <span className="live-dot" />
                </div>
                <div className="continue-book">
                  <div className="continue-cover">
                    <Cover book={books[0]} small />
                  </div>
                  <span className="continue-bubble">
                    <Icon name="headphones" size={18} />
                  </span>
                </div>
                <h3>The Creative Act</h3>
                <p>Rick Rubin</p>
                <div className="continue-progress">
                  <span />
                </div>
                <div className="continue-progress-label">
                  <span>Chapter 3 of 78</span>
                  <span>24% complete</span>
                </div>
                <button className="continue-button" onClick={() => startAudio(books[0])}>
                  <Icon name={playing && current.id === 1 ? "headphones" : "play"} size={15} fill />
                  {playing && current.id === 1 ? "Now playing" : "Continue listening"}
                </button>
              </div>
            </section>
          )}

          <section className="books-section" id="book-section">
            <div className="section-header">
              <div>
                <span className="eyebrow">HANDPICKED FOR YOUR HEADPHONES</span>
                <h2>
                  {query
                    ? `Results for “${query}”`
                    : page === "Discover"
                      ? "Your next obsession"
                      : page === "Favorites"
                        ? "Loved by you"
                        : "Made for your moments"}
                  <span className="orange-period">.</span>
                </h2>
              </div>
              <button className="text-button" onClick={() => setShowAll(!showAll)}>
                {showAll ? "Show less" : "View all books"}
                <Icon name="arrow" size={17} />
              </button>
            </div>
            <div className="category-tabs" role="tablist" aria-label="Book categories">
              {categories.map((item, index) => (
                <button
                  key={item}
                  role="tab"
                  aria-selected={category === item}
                  className={category === item ? "category-tab active" : "category-tab"}
                  onClick={() => setCategory(item)}
                >
                  {index === 0 && <span className="tab-spark">✧</span>}
                  {item}
                </button>
              ))}
              <span className="curated-label">A good story for every mood.</span>
            </div>
            <div className="book-grid">
              {displayed.map((book) => (
                <article className="book-card" key={book.id}>
                  <div className="book-image-wrap">
                    <button
                      className="cover-button"
                      onClick={() => setSelected(book)}
                      aria-label={`View ${book.title}`}
                    >
                      <Cover book={book} />
                    </button>
                    {book.tag && (
                      <span className={`book-tag ${book.id === 3 ? "popular" : ""}`}>
                        {book.tag}
                      </span>
                    )}
                    <button
                      className={`favorite-button ${favorites.includes(book.id) ? "is-favorite" : ""}`}
                      onClick={() => toggleFavorite(book.id)}
                      aria-label={`${favorites.includes(book.id) ? "Remove" : "Add"} ${book.title} ${favorites.includes(book.id) ? "from" : "to"} favorites`}
                    >
                      <Icon name="heart" size={15} fill={favorites.includes(book.id)} />
                    </button>
                    <button
                      className="book-play"
                      aria-label={`Play ${book.title} preview`}
                      onClick={() => startAudio(book, true)}
                    >
                      <Icon name="play" size={20} fill />
                    </button>
                  </div>
                  <button className="book-title" onClick={() => setSelected(book)}>
                    {book.title}
                  </button>
                  <p className="book-author">{book.author}</p>
                  <div className="book-meta">
                    <span>
                      <Icon name="star" size={12} fill />
                      {book.rating}
                    </span>
                    <i />
                    <span>{book.duration}</span>
                    <span className="book-format">AUDIOBOOK</span>
                  </div>
                </article>
              ))}
            </div>
            {!displayed.length && (
              <div className="empty-state">
                <Icon name={page === "Favorites" ? "heart" : "search"} size={36} />
                <h3>
                  {page === "Favorites"
                    ? "Make room for your favorites"
                    : "No stories here just yet"}
                </h3>
                <p>
                  {query
                    ? "Try another title or author."
                    : "Explore the collection and find a story to call your own."}
                </p>
                <button
                  className="primary-button"
                  onClick={() => {
                    navigate("Discover");
                    setQuery("");
                  }}
                >
                  Explore audiobooks <Icon name="arrow" size={17} />
                </button>
              </div>
            )}
          </section>

          {page === "Discover" && !query && (
            <section className="mood-section" aria-labelledby="mood-heading">
              <div className="section-header">
                <div>
                  <span className="eyebrow">A SOUNDTRACK FOR YOUR STATE OF MIND</span>
                  <h2 id="mood-heading">
                    Find your frequency<span className="orange-period">.</span>
                  </h2>
                </div>
                <span className="mood-hint">
                  Follow your feeling <Icon name="arrow" size={16} />
                </span>
              </div>
              <div className="mood-rail" aria-label="Browse by listening mood">
                {(
                  [
                    {
                      title: "Somewhere else",
                      subtitle: "GET LOST IN A GOOD STORY",
                      category: "Fiction",
                      icon: "discover",
                      tone: "dream",
                    },
                    {
                      title: "A softer pace",
                      subtitle: "BREATHE IN. TUNE OUT.",
                      category: "Mindfulness",
                      icon: "sun",
                      tone: "calm",
                    },
                    {
                      title: "A fresh perspective",
                      subtitle: "LITTLE IDEAS. BIG POSSIBILITIES.",
                      category: "Personal growth",
                      icon: "star",
                      tone: "glow",
                    },
                    {
                      title: "In your element",
                      subtitle: "FIND YOUR FOCUS",
                      category: "Business",
                      icon: "headphones",
                      tone: "focus",
                    },
                  ] as {
                    title: string;
                    subtitle: string;
                    category: string;
                    icon: IconName;
                    tone: string;
                  }[]
                ).map((mood) => (
                  <button
                    key={mood.tone}
                    className={`mood-card mood-${mood.tone}`}
                    onClick={() => {
                      setCategory(mood.category);
                      document
                        .getElementById("book-section")
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    <span className="mood-orb" aria-hidden="true">
                      <Icon name={mood.icon} size={31} />
                    </span>
                    <span className="mood-copy">
                      <small>{mood.subtitle}</small>
                      <strong>{mood.title}</strong>
                    </span>
                    <span className="mood-arrow">
                      <Icon name="arrow" size={16} />
                    </span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {page === "Discover" && !query && (
            <section className="bottom-features">
              <div className="editor-note">
                <span className="note-icon">
                  <Icon name="headphones" size={23} />
                </span>
                <div>
                  <span className="eyebrow">GREAT STORIES. ANYWHERE.</span>
                  <h3>Your everyday, a little extraordinary.</h3>
                  <p>On a walk, on your commute, or doing absolutely nothing.</p>
                </div>
                <span className="note-decor">✳</span>
              </div>
              <button
                className="explore-card"
                onClick={() => {
                  setCategory("Mindfulness");
                  document.getElementById("book-section")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="explore-icon">
                  <Icon name="sun" size={25} />
                </span>
                <div>
                  <span>TAKE A BREATH</span>
                  <h3>A little peace of mind</h3>
                </div>
                <Icon name="arrow" size={21} />
              </button>
            </section>
          )}
          <footer className="page-footer">
            <span>Less noise. More stories.</span>
            <span>Made for the way you listen.</span>
          </footer>
        </div>
      </main>

      <section className="player" aria-label="Audio player">
        <div className="player-book">
          <button
            className="player-cover"
            onClick={() => setSelected(current)}
            aria-label={`View ${current.title}`}
          >
            <Cover book={current} small />
          </button>
          <div>
            <button className="player-title" onClick={() => setSelected(current)}>
              {current.title}
            </button>
            <span>
              {current.author} <i>•</i> Audio preview
            </span>
          </div>
          <button
            className={`icon-button player-heart ${favorites.includes(current.id) ? "is-favorite" : ""}`}
            onClick={() => toggleFavorite(current.id)}
            aria-label="Favorite current book"
          >
            <Icon name="heart" size={18} fill={favorites.includes(current.id)} />
          </button>
        </div>
        <div className="player-center">
          <div className="playback-controls">
            <button
              className="speed-button"
              onClick={() => {
                const next = speed === 2 ? 0.75 : speed === 0.75 ? 1 : speed + 0.25;
                setSpeed(next);
                if (speech.current) speech.current.rate = next;
                if (playing) {
                  setPlaying(false);
                  window.speechSynthesis.cancel();
                  setToast(`Speed set to ${next}×. Press play to restart the preview.`);
                }
              }}
              aria-label="Change playback speed"
            >
              {speed}×
            </button>
            <button
              className="icon-button"
              aria-label="Rewind 15 seconds"
              onClick={() => {
                setProgress((p) => Math.max(0, p - 15));
                setToast("Playback position moved back 15 seconds. Preview narration continues.");
              }}
            >
              <Icon name="back" size={22} />
            </button>
            <button
              className="main-play-button"
              onClick={togglePlay}
              aria-label={playing ? "Pause audio" : "Play audio preview"}
            >
              <Icon name={playing ? "pause" : "play"} size={21} fill={!playing} />
            </button>
            <button
              className="icon-button"
              aria-label="Forward 15 seconds"
              onClick={() => {
                setProgress((p) => Math.min(1575, p + 15));
                setToast(
                  "Playback position moved forward 15 seconds. Preview narration continues.",
                );
              }}
            >
              <Icon name="forward" size={22} />
            </button>
            <button
              className="icon-button repeat-button"
              aria-label="Restart preview"
              onClick={() => startAudio(current, true)}
            >
              <Icon name="repeat" size={18} />
            </button>
          </div>
          <div className="player-progress">
            <span>{timeLabel(progress)}</span>
            <input
              type="range"
              min="0"
              max="1575"
              value={progress}
              aria-label="Playback position"
              onChange={(e) => setProgress(Number(e.target.value))}
              style={{ "--range-progress": `${(progress / 1575) * 100}%` } as React.CSSProperties}
            />
            <span>26:15</span>
          </div>
        </div>
        <div className="player-right">
          <span className="preview-label">
            <span /> AUDIO PREVIEW
          </span>
          <button
            className="icon-button"
            aria-label={volume ? "Mute" : "Unmute"}
            onClick={() => {
              setVolume(volume ? 0 : 75);
              if (speech.current) speech.current.volume = volume ? 0 : 0.75;
              if (playing) {
                window.speechSynthesis.cancel();
                setPlaying(false);
              }
            }}
          >
            <Icon name="volume" size={19} />
          </button>
          <input
            aria-label="Volume"
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => {
              setVolume(Number(e.target.value));
              if (speech.current) speech.current.volume = Number(e.target.value) / 100;
            }}
            style={{ "--range-progress": `${volume}%` } as React.CSSProperties}
          />
        </div>
        <button
          className="mobile-play-button main-play-button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play preview"}
        >
          <Icon name={playing ? "pause" : "play"} size={20} fill={!playing} />
        </button>
      </section>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {(
          [
            ["Discover", "discover"],
            ["My library", "library"],
            ["Favorites", "heart"],
          ] as [string, IconName][]
        ).map(([label, icon]) => (
          <button
            key={label}
            className={page === label ? "active" : ""}
            onClick={() => navigate(label)}
          >
            <Icon name={icon} size={21} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <section
            className="book-modal modal"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close icon-button"
              aria-label="Close details"
              onClick={() => setSelected(null)}
            >
              <Icon name="close" />
            </button>
            <div className="modal-cover">
              <Cover book={selected} />
            </div>
            <div className="modal-book-content">
              <span className="eyebrow">{selected.category} · AUDIOBOOK</span>
              <h2>{selected.title}</h2>
              <p className="modal-author">By {selected.author}</p>
              <div className="modal-meta">
                <span>
                  <Icon name="star" size={15} fill /> {selected.rating}
                </span>
                <span>
                  <Icon name="clock" size={15} /> {selected.duration}
                </span>
              </div>
              <p className="modal-description">{selected.description}</p>
              <button
                className="primary-button"
                onClick={() => {
                  startAudio(selected, true);
                  setSelected(null);
                }}
              >
                <Icon name="play" size={17} fill /> Listen to preview
              </button>
              <button
                className="secondary-button"
                onClick={() => {
                  setLibrary((prev) =>
                    prev.includes(selected.id)
                      ? prev.filter((id) => id !== selected.id)
                      : [...prev, selected.id],
                  );
                }}
              >
                <Icon name={library.includes(selected.id) ? "check" : "plus"} size={17} />
                {library.includes(selected.id) ? "In your library" : "Add to my library"}
              </button>
              <small>
                Discover your next favorite. Preview narrated with your browser’s voice.
              </small>
            </div>
          </section>
        </div>
      )}
      {collectionModal && (
        <div className="modal-overlay" onClick={() => setCollectionModal(false)}>
          <form
            className="modal simple-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Create a collection"
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              e.preventDefault();
              if (collectionName.trim()) {
                setCollections((prev) => [...prev, collectionName.trim()]);
                setCollectionName("");
                setCollectionModal(false);
                setToast(
                  "Your new collection is ready. Collections show the books in your library for this demo.",
                );
              }
            }}
          >
            <button
              type="button"
              className="modal-close icon-button"
              onClick={() => setCollectionModal(false)}
              aria-label="Close"
            >
              <Icon name="close" />
            </button>
            <span className="modal-symbol">
              <Icon name="library" size={30} />
            </span>
            <h2>A space for your stories.</h2>
            <p>
              Give your new collection a name. Keep your listening inspiration in one little place.
            </p>
            <label htmlFor="collection-name">Collection name</label>
            <input
              id="collection-name"
              autoFocus
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
              placeholder="Slow Sunday mornings"
              maxLength={35}
              required
            />
            <button className="primary-button" type="submit">
              Create collection <Icon name="plus" size={17} />
            </button>
            <small>Saved for this visit. No account required.</small>
          </form>
        </div>
      )}
      {premium && (
        <div className="modal-overlay" onClick={() => setPremium(false)}>
          <section
            className="modal simple-modal premium-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Premium preview"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close icon-button"
              onClick={() => setPremium(false)}
              aria-label="Close"
            >
              <Icon name="close" />
            </button>
            <span className="modal-symbol">
              <Icon name="headphones" size={32} />
            </span>
            <span className="eyebrow">AUDIO WITHOUT LIMITS</span>
            <h2>
              So many stories.
              <br />
              All yours to discover.
            </h2>
            <p>Unlimited inspiration, offline listening, and a world of new favorites.</p>
            <ul>
              <li>
                <Icon name="check" size={17} /> Every story, one simple membership
              </li>
              <li>
                <Icon name="check" size={17} /> Listen anywhere, at your own pace
              </li>
              <li>
                <Icon name="check" size={17} /> Curated recommendations, just for you
              </li>
            </ul>
            <button
              className="primary-button"
              onClick={() => {
                setPremium(false);
                setToast(
                  "You’re on the list. Premium is coming soon — enjoy free previews for now!",
                );
              }}
            >
              Let me know when it’s ready <Icon name="arrow" size={17} />
            </button>
            <small>This is a preview. No payment or signup required.</small>
          </section>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          <span>
            <Icon name="check" size={17} />
          </span>
          {toast}
          <button
            className="icon-button"
            aria-label="Dismiss notification"
            onClick={() => setToast("")}
          >
            <Icon name="close" size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
