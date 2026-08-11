import {
  Activity,
  Apple,
  Bell,
  Bot,
  ChevronRight,
  Droplets,
  Dumbbell,
  FileHeart,
  Flame,
  Footprints,
  HeartPulse,
  Home,
  Moon,
  Menu,
  Music,
  Play,
  Settings,
  Timer,
  TrendingUp,
  User,
  Utensils,
  Mic,
  MicOff,
  X,
  Volume2,
  Pause,
  SkipBack,
  SkipForward,
  Heart,
  Plus
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import {
  Upload,
  FileText,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Trash2,
  Eye,
  Brain,
  LoaderCircle
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const weeklyData = [
  { day: "Mon", steps: 5200 },
  { day: "Tue", steps: 6800 },
  { day: "Wed", steps: 6100 },
  { day: "Thu", steps: 7900 },
  { day: "Fri", steps: 7200 },
  { day: "Sat", steps: 9100 },
  { day: "Sun", steps: 6542 },
];


function App() {
  const now = new Date();

const hour = now.getHours();


const greeting =
  hour < 12
    ? "Good Morning"
    : hour < 17
    ? "Good Afternoon"
    : "Good Evening";

const formattedDate =
  now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
  const [coachOpen, setCoachOpen] = useState(false);
const [profileOpen, setProfileOpen] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const [activePage, setActivePage] = useState(() => {
  return localStorage.getItem("activePage") || "Dashboard";
});

const [profile, setProfile] = useState({
  id: null,
  name: "",
  age: "",
  gender: "",
  height: "",
  weight: "",
  targetWeight: "",
  goal: "Weight Loss",
  dietType: "Vegetarian",
  workoutTime: "19:00",
  waterGoal: "8",
  stepGoal: "8000",
  sleepGoal: "8",
});

useEffect(() => {
  const loadProfile = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/profile"
      );

      if (!response.ok) {
        throw new Error("Unable to load profile");
      }

      const data = await response.json();

      if (data.length > 0) {
        const latestProfile = data[data.length - 1];

        setProfile(latestProfile);
      }
    } catch (error) {
      console.error("Profile load error:", error);
    }
  };

  loadProfile();
}, []);
useEffect(() => {
  localStorage.setItem("activePage", activePage);
}, [activePage]);
  return (
    <div className="min-h-screen flex bg-transparent">

      {/* SIDEBAR */}
   <aside
  className={`
    luxury-sidebar
    ${mobileMenuOpen ? "sidebar-open" : ""}
  `}
>
  <button
  onClick={() => setMobileMenuOpen(false)}
  className="sidebar-mobile-close"
>
  <X size={18} />
</button>
        <div className="flex items-center gap-3 mb-10">
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <HeartPulse size={24} />
          </div>

          <div>
            <h1 className="font-bold text-lg">
              AI Fitness
            </h1>
            <p className="text-xs text-gray-500">
              Personal Healthcare
            </p>
          </div>
        </div>

        <nav className="space-y-2">

          <SidebarItem
  icon={<Home />}
  text="Dashboard"
  active={activePage === "Dashboard"}
 onClick={() => {
  setActivePage("Dashboard");
  setMobileMenuOpen(false);
}}
/>

<SidebarItem
  icon={<Bot />}
  text="AI Health Coach"
/>

<SidebarItem
  icon={<Utensils />}
  text="Diet Plan"
  active={activePage === "Diet Plan"}
  onClick={() => {
  setActivePage("Diet Plan");
  setMobileMenuOpen(false);
}}
/>

         <SidebarItem
  icon={<Dumbbell />}
  text="Workout"
  active={activePage === "Workout"}
 onClick={() => {
  setActivePage("Workout");
  setMobileMenuOpen(false);
}}
/>

       <SidebarItem
  icon={<Activity />}
  text="Running Mode"
  active={activePage === "Running"}
  onClick={() => {
  setActivePage("Running");
  setMobileMenuOpen(false);
}}
/>

          <SidebarItem
  icon={<FileHeart />}
  text="Health Reports"
  active={activePage === "Reports"}
  onClick={() => {
  setActivePage("Reports");
  setMobileMenuOpen(false);
}}
/>
<SidebarItem
  icon={<TrendingUp />}
  text="Progress"
  active={activePage === "Progress"}
onClick={() => {
  setActivePage("Progress");
  setMobileMenuOpen(false);
}}
/>

<SidebarItem
  icon={<Music />}
  text="Music"
  active={activePage === "Music"}
 onClick={() => {
  setActivePage("Music");
  setMobileMenuOpen(false);
}}
/>
    <SidebarItem
  icon={<Timer />}
  text="Reminders"
  active={activePage === "Reminders"}
  onClick={() => {
  setActivePage("Reminders");
  setMobileMenuOpen(false);
}}
/>

        </nav>

        <div className="absolute bottom-6 left-5 right-5">

          <SidebarItem
            icon={<Settings />}
            text="Settings"
          />

        </div>

      </aside>


      {/* MAIN AREA */}
     <main className="app-main">

        {/* HEADER */}

        <header className="flex justify-between items-center mb-8">
          <button
  onClick={() => setMobileMenuOpen(true)}
  className="mobile-menu-btn"
>
  <Menu size={21} />
</button>

          <div>
           <p className="text-gray-500 text-sm">
  {formattedDate}
</p>

<h2 className="text-3xl font-semibold mt-1">
  {greeting}, {profile.name || "Boss"} 👋
</h2>

            <p className="text-gray-400 mt-2">
              Your body is ready for today's activity.
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button className="h-11 w-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition">
              <Bell size={19} />
            </button>

 <button
  onClick={() => setProfileOpen(true)}
  className="
    flex
    items-center
    gap-3
    border
    border-white/10
    bg-white/5
    rounded-full
    py-2
    px-3
    hover:bg-white/10
    transition
  "
>
  <div className="
    h-8
    w-8
    rounded-full
    bg-gradient-to-br
    from-violet-500
    to-blue-500
    flex
    items-center
    justify-center
  ">
    <User size={16} />
  </div>

  <span className="text-sm">
    {profile.name || "Profile"}
  </span>
</button>

          </div>

        </header>

        <div className="luxury-strip mb-7">

  <div>
    <p className="text-xs tracking-[4px] text-cyan-300/70">
      PERSONAL HEALTH INTELLIGENCE
    </p>

    <h3 className="text-lg mt-2 text-white/90">
      Your health, activity and recovery in one place.
    </h3>
  </div>

  <div className="flex gap-8">

    <div>
      <p className="text-xs text-gray-500">STATUS</p>
      <p className="text-sm text-emerald-400 mt-1">
        Optimal
      </p>
    </div>

    <div>
      <p className="text-xs text-gray-500">RECOVERY</p>
      <p className="text-sm text-white mt-1">
        84%
      </p>
    </div>

    <div>
      <p className="text-xs text-gray-500">ENERGY</p>
      <p className="text-sm text-white mt-1">
        High
      </p>
    </div>

  </div>

</div>


        {/* AI HEALTH COACH */}

        <section className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl px-8 py-9 mb-7">

          <div className="absolute -right-32 -top-32 h-[400px] w-[400px] bg-cyan-500/10 blur-[110px] rounded-full"></div>

          <div className="absolute left-[40%] bottom-[-180px] h-[350px] w-[350px] bg-violet-600/10 blur-[100px] rounded-full"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">

            <div>

              <div className="flex items-center gap-2 text-emerald-400 text-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                AI COACH ONLINE
              </div>

              <h2 className="text-4xl font-semibold leading-tight">
                Your Personal
                <br />
                <span className="text-gray-400">
                  AI Health Companion
                </span>
              </h2>

              <p className="text-gray-400 mt-5 max-w-lg leading-7">
                I analyse your activity, diet, sleep and health routine
                to help you stay consistent every day.
              </p>
<button
  onClick={() => setCoachOpen(true)}
  className="
    mt-7
    px-6
    py-3
    rounded-full
    bg-white
    text-black
    font-medium
    flex
    items-center
    gap-2
    hover:scale-105
    transition
  "
>
  <Mic size={19} />
  Talk to AI
</button>

            </div>
            </div>


           

            {/* FUTURISTIC AI CORE */}

<div className="flex justify-center items-center">
<div
  className="ai-core cursor-pointer"
  onClick={() => setCoachOpen(true)}
>

    {/* Outer Glow */}
    <div className="ai-glow"></div>

    {/* Radar Waves */}
    <div className="radar-wave radar-wave-1"></div>
    <div className="radar-wave radar-wave-2"></div>

    {/* Rotating Rings */}
    <div className="orbit orbit-one">
      <span className="orbit-dot"></span>
    </div>

    <div className="orbit orbit-two">
      <span className="orbit-dot dot-two"></span>
    </div>

    <div className="orbit orbit-three">
      <span className="orbit-dot dot-three"></span>
    </div>

    {/* Floating Particles */}
    <span className="ai-particle particle-1"></span>
    <span className="ai-particle particle-2"></span>
    <span className="ai-particle particle-3"></span>
    <span className="ai-particle particle-4"></span>

    {/* Main AI Sphere */}
    <div className="ai-sphere">

      <div className="sphere-light"></div>

      <div className="ai-eye">

        <div className="eye-wave">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </div>

    {/* Status */}
    <div className="ai-status">
      <span></span>
      AI ACTIVE
    </div>

  </div>

</div>

        </section>
        {activePage === "Dashboard" && (
  <>
    {/* tumhara existing dashboard content */}
  </>
)}

{activePage === "Diet Plan" && (
  <DietPlanner profile={profile} />
)}
{activePage === "Workout" && (
  <WorkoutPlanner profile={profile} />
)}
{activePage === "Running" && (
  <RunningMode profile={profile} />
)}
{activePage === "Music" && (
  <MusicPage />
)}
{activePage === "Reports" && (
  <HealthReports profile={profile} />
)}
{activePage === "Reminders" && (
  <ReminderPage profile={profile} />
)}
{activePage === "Progress" && (
  <ProgressPage profile={profile} />
)}

        {/* HEALTH STATS */}

        <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-7">

          <MetricCard
            icon={<HeartPulse />}
            title="Heart Rate"
            value="78"
            unit="BPM"
            text="Normal"
          />

          <MetricCard
            icon={<Footprints />}
            title="Daily Steps"
            value="6,542"
            unit="/ 8,000"
            text="81% completed"
          />

          <MetricCard
            icon={<Flame />}
            title="Calories"
            value="420"
            unit="kcal"
            text="Target 600"
          />

          <MetricCard
            icon={<Moon />}
            title="Sleep"
            value="7h 20m"
            unit=""
            text="Good recovery"
          />

        </section>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* HEALTH SCORE */}

          <section className="rounded-[25px] border border-white/10 bg-white/[0.04] p-6">

            <div className="flex justify-between">

              <div>
                <p className="text-gray-400">
                  Health Score
                </p>

                <h3 className="text-4xl font-semibold mt-2">
                  87
                  <span className="text-gray-500 text-lg">
                    /100
                  </span>
                </h3>
              </div>

              <Activity className="text-emerald-400" />

            </div>

            <div className="h-2 bg-white/10 rounded-full mt-7 overflow-hidden">

              <div className="w-[87%] h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>

            </div>

            <p className="text-sm text-gray-500 mt-4">
              Excellent progress this week.
            </p>

          </section>


          {/* WATER */}

          <section className="rounded-[25px] border border-white/10 bg-white/[0.04] p-6">

            <div className="flex justify-between">

              <div>
                <p className="text-gray-400">
                  Hydration
                </p>

                <h3 className="text-4xl font-semibold mt-2">
                  6
                  <span className="text-gray-500 text-lg">
                    /8 glasses
                  </span>
                </h3>
              </div>

              <Droplets className="text-cyan-400" />

            </div>

            <div className="flex gap-2 mt-7">

              {[1,2,3,4,5,6,7,8].map((item) => (
                <div
                  key={item}
                  className={`h-10 flex-1 rounded-lg ${
                    item <= 6
                      ? "bg-cyan-400/80"
                      : "bg-white/10"
                  }`}
                />
              ))}

            </div>

          </section>


          {/* WORKOUT */}

          <section className="rounded-[25px] border border-white/10 bg-white/[0.04] p-6">

            <div className="flex justify-between">

              <div>
                <p className="text-gray-400">
                  Next Workout
                </p>

                <h3 className="text-xl font-semibold mt-2">
                  Upper Body
                </h3>

                <p className="text-gray-500 mt-1 text-sm">
                  Today • 7:00 PM
                </p>
              </div>

              <Dumbbell className="text-violet-400" />

            </div>

            <button className="mt-6 w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 transition flex items-center justify-center gap-2">

              <Play size={17} />

              Start Workout

            </button>

          </section>

        </div>


        {/* LOWER SECTION */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">

          {/* TODAY PLAN */}

          <section className="rounded-[25px] border border-white/10 bg-white/[0.04] p-6">

            <div className="flex justify-between mb-6">

              <div>
                <h3 className="text-xl font-semibold">
                  Today's Plan
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Your personalized daily routine
                </p>
              </div>

              <ChevronRight className="text-gray-600" />

            </div>

            <PlanItem
              icon={<Apple />}
              title="Healthy Breakfast"
              time="08:30 AM"
              status="Completed"
            />

            <PlanItem
              icon={<Utensils />}
              title="Protein Rich Lunch"
              time="01:30 PM"
              status="Completed"
            />

            <PlanItem
              icon={<Dumbbell />}
              title="Upper Body Workout"
              time="07:00 PM"
              status="Upcoming"
            />

            <PlanItem
              icon={<Footprints />}
              title="Evening Walk"
              time="08:15 PM"
              status="Upcoming"
            />

          </section>
          <section className="grid grid-cols-[2fr_1fr] gap-5 mt-5">

  {/* WEEKLY ACTIVITY */}

  <div className="lux-card p-6">

    <div className="flex items-center justify-between mb-6">

      <div>

        <h3 className="text-xl font-semibold">
          Weekly Activity
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Daily step performance
        </p>

      </div>


      <div className="text-right">

        <p className="text-2xl font-semibold">
          47.6K
        </p>

        <p className="text-xs text-emerald-400">
          +12.4% this week
        </p>

      </div>

    </div>


    <div className="h-[240px]">

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <AreaChart data={weeklyData}>

          <defs>

            <linearGradient
              id="stepGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#22d3ee"
                stopOpacity={0.35}
              />

              <stop
                offset="95%"
                stopColor="#22d3ee"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>


          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#6b7280",
              fontSize: 12
            }}
          />


          <YAxis hide />


          <Tooltip
            contentStyle={{
              background: "#0b111a",
              border: "1px solid rgba(255,255,255,.1)",
              borderRadius: "14px"
            }}
          />


          <Area
            type="monotone"
            dataKey="steps"
            stroke="#22d3ee"
            strokeWidth={3}
            fill="url(#stepGradient)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>

  </div>


  {/* BODY STATUS */}

  <div className="lux-card p-6">

    <p className="text-gray-400 text-sm">
      Body Status
    </p>

    <h3 className="text-xl font-semibold mt-1">
      Strong Recovery
    </h3>


    <div className="space-y-6 mt-8">

      <BodyMetric
        title="Recovery"
        value="84%"
        percentage="84%"
      />

      <BodyMetric
        title="Energy"
        value="78%"
        percentage="78%"
      />

      <BodyMetric
        title="Stress"
        value="24%"
        percentage="24%"
      />

      <BodyMetric
        title="Sleep Quality"
        value="86%"
        percentage="86%"
      />

    </div>

  </div>

</section>


          {/* RUNNING MUSIC */}

          <section className="relative overflow-hidden rounded-[25px] border border-white/10 bg-white/[0.04] p-6">

            <div className="absolute right-0 top-0 h-52 w-52 bg-violet-500/10 blur-[80px]"></div>

            <div className="relative">

              <p className="text-gray-500 text-sm">
                ACTIVE MODE
              </p>

              <h3 className="text-2xl font-semibold mt-2">
                Ready for a run?
              </h3>

              <p className="text-gray-400 mt-2">
                Track your steps, distance, calories and enjoy music
                while running.
              </p>

              <div className="flex gap-3 mt-7">

                <button className="px-5 py-3 bg-emerald-400 text-black rounded-xl font-medium flex gap-2 items-center">

                  <Play size={18} />

                  Start Running

                </button>

                <button className="px-5 py-3 bg-white/10 rounded-xl flex gap-2 items-center">

                  <Music size={18} />

                  Music

                </button>

              </div>

            </div>

          </section>

        </div>
        {profileOpen && (
  <ProfileModal
    profile={profile}
    setProfile={setProfile}
    onClose={() => setProfileOpen(false)}
  />
)}

      </main>
      {coachOpen && (
 <VoiceCoach
  profile={profile}
  onClose={() => setCoachOpen(false)}
/>
)}

    </div>
  );
}
function BodyMetric({
  title,
  value,
  percentage
}) {

  return (

    <div>

      <div className="flex justify-between mb-2">

        <span className="text-sm text-gray-400">
          {title}
        </span>

        <span className="text-sm">
          {value}
        </span>

      </div>


      <div className="h-[5px] rounded-full bg-white/10 overflow-hidden">

        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
          style={{
            width: percentage
          }}
        />

      </div>

    </div>

  );

}



function SidebarItem({
  icon,
  text,
  active,
  onClick
}) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
        transition
        ${
          active
            ? "bg-white/10 text-white"
            : "text-gray-500 hover:bg-white/5 hover:text-white"
        }
      `}
    >
      <span className="[&>svg]:w-[18px]">
        {icon}
      </span>

      <span className="text-sm">
        {text}
      </span>
    </div>
  );
}



function MetricCard({ icon, title, value, unit, text }) {

  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition">

      <div className="flex items-center justify-between">

        <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-300">
          {icon}
        </div>

        <span className="text-xs text-emerald-400">
          {text}
        </span>

      </div>

      <p className="text-gray-500 text-sm mt-5">
        {title}
      </p>

      <div className="mt-1">

        <span className="text-2xl font-semibold">
          {value}
        </span>

        <span className="text-gray-500 ml-2 text-sm">
          {unit}
        </span>

      </div>

    </div>
  );
}



function PlanItem({ icon, title, time, status }) {

  return (
    <div className="flex items-center justify-between py-4 border-b border-white/5 last:border-none">

      <div className="flex gap-3 items-center">

        <div className="h-10 w-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400">
          {icon}
        </div>

        <div>

          <p className="font-medium">
            {title}
          </p>

          <p className="text-gray-600 text-xs mt-1">
            {time}
          </p>

        </div>

      </div>

      <span
        className={`text-xs px-3 py-1 rounded-full ${
          status === "Completed"
            ? "bg-emerald-500/10 text-emerald-400"
            : "bg-orange-500/10 text-orange-400"
        }`}
      >
        {status}
      </span>

    </div>
  );
}
function CircularProgress({ value, label }) {

  const radius = 52;

  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (value / 100) * circumference;


  return (

    <div className="relative w-36 h-36 flex items-center justify-center">

      <svg
        className="-rotate-90"
        width="144"
        height="144"
      >

        <circle
          cx="72"
          cy="72"
          r={radius}
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="9"
          fill="none"
        />

        <circle
          cx="72"
          cy="72"
          r={radius}
          stroke="url(#healthGradient)"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="health-ring"
        />

        <defs>

          <linearGradient id="healthGradient">

            <stop
              offset="0%"
              stopColor="#34d399"
            />

            <stop
              offset="100%"
              stopColor="#22d3ee"
            />

          </linearGradient>

        </defs>

      </svg>


      <div className="absolute text-center">

        <h4 className="text-3xl font-semibold">
          {value}
        </h4>

        <p className="text-[10px] text-emerald-400 tracking-wider">
          {label}
        </p>

      </div>

    </div>

  );

}function VoiceCoach({
  onClose,
  profile
})
 {

  const [listening, setListening] = useState(false);

  const [userText, setUserText] = useState(
    "Tap the microphone and talk to your coach."
  );

  const [aiText, setAiText] = useState(
    "Good evening Boss. I am ready to help with your fitness and health routine."
  );


  // -------------------------
  // AI SPEAK
  // -------------------------

  const speak = (text) => {

    if (!("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(text);

    speech.lang = "en-IN";

    speech.rate = 0.95;

    speech.pitch = 0.95;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);

  };


  // -------------------------
  // SIMPLE AI RESPONSE
  // -------------------------

  const createResponse = (message) => {

    const text =
      message.toLowerCase();


   if (
  text.includes("workout") ||
  text.includes("exercise")
) {

  if (profile.goal === "Weight Loss") {

    return `
      Boss ${profile.name || ""},
      your current goal is weight loss.

      Today I recommend twenty five minutes
      of strength training followed by
      fifteen to twenty minutes of walking.

      Your planned workout time is
      ${profile.workoutTime}.
    `;

  }


  if (profile.goal === "Muscle Gain") {

    return `
      Boss ${profile.name || ""},
      your goal is muscle gain.

      Today focus on resistance training
      with proper recovery between sets.

      Your scheduled workout time is
      ${profile.workoutTime}.
    `;

  }


  return `
    Boss ${profile.name || ""},
    your fitness goal is ${profile.goal}.

    Your workout is scheduled for
    ${profile.workoutTime}.
  `;

}

if (
  text.includes("step") ||
  text.includes("walk")
) {

  const currentSteps = 6542;

  const goal =
    Number(profile.stepGoal) || 8000;

  const remaining =
    Math.max(goal - currentSteps, 0);


  return `
    Boss ${profile.name || ""},
    you have completed
    ${currentSteps.toLocaleString()} steps today.

    Your personal target is
    ${goal.toLocaleString()} steps.

    You have
    ${remaining.toLocaleString()}
    steps remaining.
  `;

}


    if (
      text.includes("water") ||
      text.includes("pani")
    ) {

      return `
        Boss, you have completed six out of eight
        glasses of water today.
        Have another glass of water soon.
      `;

    }

if (
  text.includes("diet") ||
  text.includes("food") ||
  text.includes("khana")
) {

  return `
    Boss ${profile.name || ""},
    your current goal is ${profile.goal}
    and your diet preference is
    ${profile.dietType}.

    For your next meal,
    focus on a balanced meal containing
    adequate protein, vegetables,
    complex carbohydrates and hydration.

    I will create your complete personalized
    diet plan once your daily nutrition
    module is connected.
  `;

}


    if (
      text.includes("sleep")
    ) {

      return `
        Boss, you slept for seven hours and twenty minutes.
        Your sleep score is good,
        but try to get closer to eight hours tonight.
      `;

    }
    if (
  text.includes("weight") ||
  text.includes("goal")
) {

  return `
    Boss ${profile.name || ""},
    your current weight is
    ${profile.weight || "not entered"} kilograms.

    Your target weight is
    ${profile.targetWeight || "not entered"} kilograms.

    Your selected fitness goal is
    ${profile.goal}.
  `;

}


    if (
      text.includes("run") ||
      text.includes("running")
    ) {

      return `
        Boss, running mode is ready.
        I recommend a five minute warm-up
        before starting your run.
      `;

    }


    if (
      text.includes("hello") ||
      text.includes("hi")
    ) {

      return `
        Hello Boss.
        Your health score today is 87.
        What would you like to work on?
      `;

    }


    return `
      Boss, I heard you.
      This version of your health coach currently understands
      workout, steps, hydration, diet, sleep and running commands.
    `;

  };


  // -------------------------
  // START LISTENING
  // -------------------------

  const startListening = () => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

      const response =
        "Speech recognition is not supported in this browser. Please use Chrome.";

      setAiText(response);

      speak(response);

      return;

    }


    const recognition =
      new SpeechRecognition();


    recognition.lang = "en-IN";

    recognition.continuous = false;

    recognition.interimResults = true;


    recognition.onstart = () => {

      setListening(true);

      setUserText("Listening...");

    };


    recognition.onresult = (event) => {

      let transcript = "";


      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {

        transcript +=
          event.results[i][0].transcript;

      }


      setUserText(transcript);


      const finalResult =
        event.results[
          event.results.length - 1
        ].isFinal;


      if (finalResult) {

        const response =
          createResponse(transcript);


        setAiText(response);

        speak(response);

      }

    };


    recognition.onerror = (event) => {

      console.log(
        "Speech recognition error:",
        event.error
      );

      setListening(false);

      setUserText(
        "I couldn't hear you clearly. Try again."
      );

    };


    recognition.onend = () => {

      setListening(false);

    };


    recognition.start();

  };


  return (

    <div className="coach-overlay">

      <div className="coach-panel">


        {/* CLOSE */}

        <button
          onClick={() => {

            window.speechSynthesis?.cancel();

            onClose();

          }}
          className="coach-close"
        >
          <X size={20} />
        </button>


        {/* TOP */}

        <div className="text-center">

          <p className="
            text-[10px]
            tracking-[5px]
            text-cyan-300/70
          ">
            PERSONAL HEALTH INTELLIGENCE
          </p>


          <h2 className="
            text-3xl
            font-semibold
            mt-3
          ">
            AI Health Coach
          </h2>


          <p className="
            text-gray-500
            mt-2
            text-sm
          ">
            Your personal fitness and healthcare companion
          </p>

        </div>


        {/* AI CORE */}

        <div className={`
          voice-ai-core
          ${listening ? "voice-listening" : ""}
        `}>

          <div className="voice-glow"></div>


          <div className="voice-ring voice-ring-one">
          </div>


          <div className="voice-ring voice-ring-two">
          </div>


          <div className="voice-ring voice-ring-three">
          </div>


          <div className="voice-center">

            <div className="voice-bars">

              {[1,2,3,4,5,6,7].map(
                (bar) => (

                  <span
                    key={bar}
                    style={{
                      animationDelay:
                        `${bar * 0.08}s`
                    }}
                  />

                )
              )}

            </div>

          </div>

        </div>


        {/* AI RESPONSE */}

        <div className="coach-message">

          <div className="flex gap-3">

            <div className="coach-ai-icon">

              <Volume2 size={17} />

            </div>


            <div>

              <p className="
                text-[10px]
                tracking-[2px]
                text-cyan-400
              ">
                AI COACH
              </p>


              <p className="
                text-gray-200
                mt-2
                leading-7
              ">
                {aiText}
              </p>

            </div>

          </div>

        </div>


        {/* USER SPEECH */}

        <div className="user-speech">

          <p className="
            text-[10px]
            tracking-[2px]
            text-gray-600
          ">
            YOU
          </p>


          <p className="
            text-gray-300
            mt-2
          ">
            {userText}
          </p>

        </div>


        {/* MICROPHONE */}

        <div className="flex justify-center mt-8">

          <button
            onClick={startListening}
            className={`
              microphone-button
              ${
                listening
                  ? "microphone-active"
                  : ""
              }
            `}
          >

            {listening ? (

              <MicOff size={28} />

            ) : (

              <Mic size={28} />

            )}

          </button>

        </div>


        <p className="
          text-center
          text-xs
          text-gray-600
          mt-4
        ">

          {listening
            ? "Listening to you..."
            : "Tap microphone to speak"}

        </p>


        {/* COMMAND SUGGESTIONS */}

        <div className="
          flex
          justify-center
          flex-wrap
          gap-2
          mt-7
        ">

          <CommandChip text="Today's workout" />

          <CommandChip text="How many steps?" />

          <CommandChip text="Water status" />

          <CommandChip text="Diet plan" />

          <CommandChip text="Sleep status" />

        </div>

      </div>

    </div>

  );

}



function CommandChip({ text }) {

  return (

    <div className="
      px-4
      py-2
      rounded-full
      border
      border-white/10
      bg-white/[0.03]
      text-xs
      text-gray-500
    ">

      {text}

    </div>

  );
}
  function ProfileInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  unit
}) {

  return (

    <div>

      <label className="
        text-xs
        text-gray-500
        ml-1
      ">
        {label}
      </label>


      <div className="relative mt-2">

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="profile-input"
        />


        {unit && (

          <span className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-xs
            text-gray-600
          ">
            {unit}
          </span>

        )}

      </div>

    </div>

  );

}



function ProfileSelect({
  label,
  name,
  value,
  onChange,
  options
}) {

  return (

    <div>

      <label className="
        text-xs
        text-gray-500
        ml-1
      ">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="profile-input mt-2"
      >

        <option value="">
          Select
        </option>

        {options.map(option => (

          <option
            key={option}
            value={option}
          >
            {option}
          </option>

        ))}

      </select>

    </div>

  );

}


function ProfileModal({
  profile,
  setProfile,
  onClose
}) {

  const [form, setForm] = useState(profile);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

  };


  const saveProfile = async () => {
  try {
    const hasId = Boolean(form.id);

    const url = hasId
      ? `http://localhost:8080/api/profile/${form.id}`
      : "http://localhost:8080/api/profile";

    const method = hasId
      ? "PUT"
      : "POST";

    const response = await fetch(url, {
      method,

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: form.name,
        age: Number(form.age),
        gender: form.gender,
        height: Number(form.height),
        weight: Number(form.weight),
        targetWeight: Number(form.targetWeight),
        goal: form.goal,
        dietType: form.dietType,
        workoutTime: form.workoutTime,
        waterGoal: Number(form.waterGoal),
        stepGoal: Number(form.stepGoal),
        sleepGoal: Number(form.sleepGoal),
      }),
    });

    if (!response.ok) {
      throw new Error("Profile save failed");
    }

    const savedProfile =
      await response.json();

    setProfile(savedProfile);

    onClose();

  } catch (error) {
    console.error(error);

    alert("Unable to save profile.");
  }
};


  return (

    <div className="profile-overlay">

      <div className="profile-panel">

        <button
          onClick={onClose}
          className="profile-close"
        >
          <X size={20} />
        </button>


        <div className="mb-8">

          <p className="
            text-[10px]
            tracking-[4px]
            text-cyan-400
          ">
            PERSONALIZATION
          </p>

          <h2 className="
            text-3xl
            font-semibold
            mt-2
          ">
            Your Health Profile
          </h2>

          <p className="
            text-gray-500
            mt-2
          ">
            Help your AI coach understand your
            fitness goals and daily routine.
          </p>

        </div>


        <div className="
          grid
          grid-cols-1 lg:grid-cols-2
          gap-4
        ">

          <ProfileInput
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Suman"
          />

          <ProfileInput
            label="Age"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="23"
            type="number"
          />


          <ProfileSelect
            label="Gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            options={[
              "Male",
              "Female",
              "Prefer not to say"
            ]}
          />


          <ProfileInput
            label="Height"
            name="height"
            value={form.height}
            onChange={handleChange}
            placeholder="175"
            type="number"
            unit="cm"
          />


          <ProfileInput
            label="Current Weight"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            placeholder="82"
            type="number"
            unit="kg"
          />


          <ProfileInput
            label="Target Weight"
            name="targetWeight"
            value={form.targetWeight}
            onChange={handleChange}
            placeholder="75"
            type="number"
            unit="kg"
          />


          <ProfileSelect
            label="Fitness Goal"
            name="goal"
            value={form.goal}
            onChange={handleChange}
            options={[
              "Weight Loss",
              "Muscle Gain",
              "Maintain Weight",
              "Improve Fitness",
              "Increase Stamina"
            ]}
          />


          <ProfileSelect
            label="Diet Preference"
            name="dietType"
            value={form.dietType}
            onChange={handleChange}
            options={[
              "Vegetarian",
              "Non-Vegetarian",
              "Vegan",
              "Eggetarian"
            ]}
          />


          <ProfileInput
            label="Daily Step Goal"
            name="stepGoal"
            value={form.stepGoal}
            onChange={handleChange}
            type="number"
            placeholder="8000"
          />


          <ProfileInput
            label="Water Goal"
            name="waterGoal"
            value={form.waterGoal}
            onChange={handleChange}
            type="number"
            placeholder="8"
            unit="glasses"
          />


          <ProfileInput
            label="Sleep Goal"
            name="sleepGoal"
            value={form.sleepGoal}
            onChange={handleChange}
            type="number"
            placeholder="8"
            unit="hours"
          />


          <ProfileInput
            label="Workout Time"
            name="workoutTime"
            value={form.workoutTime}
            onChange={handleChange}
            type="time"
          />

        </div>


        <div className="
          flex
          justify-end
          gap-3
          mt-8
        ">

          <button
            onClick={onClose}
            className="
              px-6
              py-3
              rounded-xl
              bg-white/5
              border
              border-white/10
              text-gray-400
            "
          >
            Cancel
          </button>


          <button
            onClick={saveProfile}
            className="
              px-7
              py-3
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-emerald-400
              text-black
              font-medium
              hover:scale-[1.03]
              transition
            "
          >
            Save Profile
          </button>

        </div>

      </div>

    </div>

  );

}

function DietPlanner({ profile }) {
  const [generated, setGenerated] = useState(() => {
  const saved = localStorage.getItem("dietMeals");

  return saved
    ? JSON.parse(saved).length > 0
    : false;
});

const [dailyCalories, setDailyCalories] =
  useState(1950);

const [protein, setProtein] =
  useState(95);

const [carbs, setCarbs] =
  useState(220);

const [meals, setMeals] = useState(() => {
  const saved = localStorage.getItem("dietMeals");

  return saved
    ? JSON.parse(saved)
    : [];
});
useEffect(() => {
  localStorage.setItem(
    "dietMeals",
    JSON.stringify(meals)
  );
}, [meals]);

 const defaultMeals = [
  {
    type: "BREAKFAST",
    time: "08:30 AM",
    title: "High Protein Breakfast",
    food: "Oats + Milk + Banana + Almonds",
    calories: 420,
    protein: "22g",
    carbs: "58g",
  },
  {
    type: "LUNCH",
    time: "01:30 PM",
    title: "Balanced Lunch",
    food: "Dal + Rice + Salad + Curd",
    calories: 580,
    protein: "28g",
    carbs: "76g",
  },
  {
    type: "SNACK",
    time: "05:00 PM",
    title: "Evening Snack",
    food: "Fruit + Roasted Chana",
    calories: 220,
    protein: "10g",
    carbs: "35g",
  },
  {
    type: "DINNER",
    time: "08:30 PM",
    title: "Light Protein Dinner",
    food: "Paneer + Roti + Vegetables",
    calories: 510,
    protein: "32g",
    carbs: "52g",
  },
];







 

const generateDietPlan = async () => {

  if (!profile?.id) {

    alert(
      "Please save your profile first."
    );

    return;
  }


  const weight =
    Number(profile.weight) || 70;


  let calories =
    weight * 30;


  if (
    profile.goal ===
    "Weight Loss"
  ) {
    calories -= 400;
  }


  if (
    profile.goal ===
    "Muscle Gain"
  ) {
    calories += 300;
  }


  calories =
    Math.max(
      Math.round(calories),
      1400
    );


  let newMeals;


  if (
    profile.dietType ===
    "Vegetarian"
  ) {

    newMeals = {
      breakfast:
        "Oats + Milk + Banana + Almonds + Peanut Butter",

      lunch:
        "Dal + Rice + Paneer + Salad + Curd",

      snack:
        "Apple + Roasted Chana + Green Tea",

      dinner:
        "Paneer + 2 Roti + Mixed Vegetables + Salad"
    };

  } else {

    newMeals = {
      breakfast:
        "Eggs + Oats + Banana + Milk",

      lunch:
        "Chicken + Rice + Salad + Curd",

      snack:
        "Boiled Eggs + Fruit + Nuts",

      dinner:
        "Chicken + Roti + Vegetables + Salad"
    };

  }


  const proteinValue =
    profile.goal === "Muscle Gain"
      ? 130
      : 95;


  const carbsValue = 220;


  try {

    const response =
      await fetch(
        "http://localhost:8080/api/diet",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify({
              profileId:
                profile.id,

              dailyCalories:
                calories,

              protein:
                proteinValue,

              carbs:
                carbsValue,

              waterGoal:
                Number(
                  profile.waterGoal
                ) || 8,

              breakfast:
                newMeals.breakfast,

              lunch:
                newMeals.lunch,

              snack:
                newMeals.snack,

              dinner:
                newMeals.dinner
            })
        }
      );


    if (!response.ok) {

      throw new Error(
        "Diet plan save failed"
      );

    }


    await response.json();


    setDailyCalories(
      calories
    );

    setProtein(
      proteinValue
    );

    setCarbs(
      carbsValue
    );


    setMeals([
      {
        type: "BREAKFAST",
        time: "08:30 AM",
        title:
          "High Protein Breakfast",
        food:
          newMeals.breakfast,
        calories:
          Math.round(
            calories * 0.25
          ),
        protein:
          "25g",
        carbs:
          "55g"
      },
      {
        type: "LUNCH",
        time: "01:30 PM",
        title:
          "Balanced Lunch",
        food:
          newMeals.lunch,
        calories:
          Math.round(
            calories * 0.35
          ),
        protein:
          "35g",
        carbs:
          "70g"
      },
      {
        type: "SNACK",
        time: "05:00 PM",
        title:
          "Healthy Snack",
        food:
          newMeals.snack,
        calories:
          Math.round(
            calories * 0.12
          ),
        protein:
          "10g",
        carbs:
          "30g"
      },
      {
        type: "DINNER",
        time: "08:30 PM",
        title:
          "Light Dinner",
        food:
          newMeals.dinner,
        calories:
          Math.round(
            calories * 0.28
          ),
        protein:
          "30g",
        carbs:
          "50g"
      }
    ]);


    setGenerated(true);


  } catch (error) {

    console.error(error);

    alert(
      "Unable to generate diet plan."
    );

  }

};
  useEffect(() => {

  localStorage.setItem(
    "dietGenerated",
    generated.toString()
  );

  localStorage.setItem(
    "dailyCalories",
    dailyCalories.toString()
  );

  localStorage.setItem(
    "dietMeals",
    JSON.stringify(meals)
  );

}, [
  generated,
  dailyCalories,
  meals
]);

  return (
    <div className="diet-page">

      {/* TOP HEADER */}

      <div className="flex justify-between items-end mb-8">

        <div>
          <p className="text-[10px] tracking-[4px] text-emerald-400">
            AI NUTRITION
          </p>

          <h1 className="text-4xl font-semibold mt-2">
            Your Diet Plan
          </h1>

          <p className="text-gray-500 mt-3">
            Personalized nutrition based on your fitness goal and lifestyle.
          </p>
        </div>

        <button
          onClick={generateDietPlan}
          className="generate-diet-btn"
        >
          <Bot size={18} />

          {generated
            ? "Regenerate Diet Plan"
            : "Generate My Diet Plan"}
        </button>

      </div>


      {/* PROFILE SUMMARY */}

      <section className="diet-hero">

        <div>

          <p className="text-xs tracking-[3px] text-cyan-400/70">
            PERSONAL NUTRITION PROFILE
          </p>

          <h2 className="text-3xl font-semibold mt-4">
            {profile.name || "Your"}'s Daily Nutrition
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl leading-7">

            Your plan is optimized for{" "}

            <span className="text-white">
              {profile.goal || "general fitness"}
            </span>

            {" "}with a{" "}

            <span className="text-white">
              {profile.dietType || "balanced"}
            </span>

            {" "}diet preference.

          </p>

        </div>


        <div className="nutrition-circle">

          <div className="nutrition-circle-inner">

            <p className="text-xs text-gray-500">
              DAILY TARGET
            </p>
<h3 className="text-4xl font-semibold mt-1">
  {dailyCalories.toLocaleString()}
</h3>
            <p className="text-sm text-emerald-400">
              kcal
            </p>

          </div>

        </div>

      </section>


      {/* NUTRITION STATS */}

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">

       <NutritionStat
  title="Calories"
  value={dailyCalories.toLocaleString()}
  unit="kcal"
/>

<NutritionStat
  title="Protein"
  value={protein}
  unit="g"
/>

<NutritionStat
  title="Carbohydrates"
  value={carbs}
  unit="g"
/>

<NutritionStat
  title="Water"
  value={profile.waterGoal || "8"}
  unit="glasses"
/>

      </div>


      {/* GENERATED MESSAGE */}

      {generated && (

        <div className="diet-generated-message">

          <Bot size={18} />

          <span>
            Boss {profile.name || ""},
            your personalized diet plan has been generated.
          </span>

        </div>

      )}


      {/* MEALS */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-7">

        {meals.map((meal) => (

          <MealCard
            key={meal.type}
            meal={meal}
          />

        ))}

      </div>


      {/* AI INSIGHT */}

      <section className="ai-diet-note mt-6">

        <div className="ai-diet-icon">
          <Bot size={22} />
        </div>

        <div>

          <p className="text-xs text-cyan-400 tracking-[2px]">
            AI COACH INSIGHT
          </p>

          <p className="text-gray-300 mt-2 leading-7">

            Boss {profile.name || ""},
            your current goal is{" "}
            <span className="text-white">
              {profile.goal || "general fitness"}
            </span>.

            {" "}Your current weight is{" "}
            <span className="text-white">
              {profile.weight || "--"} kg
            </span>

            {" "}and target weight is{" "}
            <span className="text-white">
              {profile.targetWeight || "--"} kg.
            </span>

          </p>

        </div>

      </section>

    </div>
  );
}
function NutritionStat({
  title,
  value,
  unit
}) {

  return (

    <div className="nutrition-stat">

      <p className="
        text-gray-500
        text-xs
      ">
        {title}
      </p>

      <div className="
        mt-3
        flex
        items-end
        gap-2
      ">

        <span className="
          text-3xl
          font-semibold
        ">
          {value}
        </span>

        <span className="
          text-xs
          text-gray-600
          mb-1
        ">
          {unit}
        </span>

      </div>

    </div>

  );
}



function MealCard({ meal }) {

  return (

    <div className="meal-card">

      <div className="
        flex
        justify-between
        items-start
      ">

        <div>

          <p className="
            text-[10px]
            tracking-[3px]
            text-emerald-400
          ">
            {meal.type}
          </p>

          <h3 className="
            text-xl
            font-semibold
            mt-2
          ">
            {meal.title}
          </h3>

          <p className="
            text-gray-500
            text-sm
            mt-1
          ">
            {meal.time}
          </p>

        </div>


        <div className="meal-icon">

          <Utensils size={20} />

        </div>

      </div>


      <p className="
        text-gray-300
        mt-6
        leading-6
      ">
        {meal.food}
      </p>


      <div className="
        grid
        grid-cols-1 lg:grid-cols-3
        gap-3
        mt-6
      ">

        <MealMetric
          label="CALORIES"
          value={`${meal.calories}`}
        />

        <MealMetric
          label="PROTEIN"
          value={meal.protein}
        />

        <MealMetric
          label="CARBS"
          value={meal.carbs}
        />

      </div>

    </div>

  );
}



function MealMetric({
  label,
  value
}) {

  return (

    <div className="meal-metric">

      <p className="
        text-[9px]
        text-gray-600
        tracking-wider
      ">
        {label}
      </p>

      <p className="
        text-sm
        font-medium
        mt-1
      ">
        {value}
      </p>

    </div>

  );
}

function WorkoutPlanner({ profile }) {

  const [workoutStarted, setWorkoutStarted] = useState(false);
  const [activeExercise, setActiveExercise] = useState(0);

  const workouts =
    profile.goal === "Muscle Gain"
      ? [
          {
            name: "Push Ups",
            target: "Chest • Triceps",
            sets: "4 Sets",
            reps: "12 Reps",
            rest: "60 sec",
            duration: "8 min",
          },
          {
            name: "Shoulder Press",
            target: "Shoulders",
            sets: "4 Sets",
            reps: "10 Reps",
            rest: "60 sec",
            duration: "10 min",
          },
          {
            name: "Bodyweight Squats",
            target: "Legs • Glutes",
            sets: "4 Sets",
            reps: "15 Reps",
            rest: "60 sec",
            duration: "10 min",
          },
          {
            name: "Plank",
            target: "Core",
            sets: "3 Sets",
            reps: "45 sec",
            rest: "40 sec",
            duration: "6 min",
          },
        ]
      : [
          {
            name: "Warm-up Walk",
            target: "Full Body",
            sets: "1 Round",
            reps: "5 Minutes",
            rest: "—",
            duration: "5 min",
          },
          {
            name: "Bodyweight Squats",
            target: "Legs • Glutes",
            sets: "3 Sets",
            reps: "15 Reps",
            rest: "45 sec",
            duration: "8 min",
          },
          {
            name: "Push Ups",
            target: "Chest • Arms",
            sets: "3 Sets",
            reps: "12 Reps",
            rest: "45 sec",
            duration: "7 min",
          },
          {
            name: "Mountain Climbers",
            target: "Cardio • Core",
            sets: "3 Sets",
            reps: "30 sec",
            rest: "30 sec",
            duration: "6 min",
          },
          {
            name: "Brisk Walk",
            target: "Cardio",
            sets: "1 Round",
            reps: "15 Minutes",
            rest: "—",
            duration: "15 min",
          },
        ];


  if (workoutStarted) {

    return (
      <WorkoutSession
        exercises={workouts}
        activeExercise={activeExercise}
        setActiveExercise={setActiveExercise}
        onExit={() => {
          setWorkoutStarted(false);
          setActiveExercise(0);
        }}
      />
    );
  }


  return (
    <div className="workout-page">

      <div className="flex justify-between items-end mb-8">

        <div>
          <p className="text-[10px] tracking-[4px] text-violet-400">
            AI TRAINING
          </p>

          <h1 className="text-4xl font-semibold mt-2">
            Today's Workout
          </h1>

          <p className="text-gray-500 mt-3">
            Personalized training designed around your fitness goal.
          </p>
        </div>

        <button
          onClick={() => setWorkoutStarted(true)}
          className="start-workout-btn"
        >
          <Play size={18} />
          Start Workout
        </button>

      </div>


      {/* WORKOUT HERO */}

      <section className="workout-hero">

        <div>

          <p className="text-xs tracking-[3px] text-cyan-400/70">
            PERSONAL TRAINING PLAN
          </p>

          <h2 className="text-3xl font-semibold mt-4">
            {profile.goal || "Daily Fitness"}
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl leading-7">
            Boss {profile.name || ""},
            today's session is designed for your
            {" "}
            <span className="text-white">
              {profile.goal || "fitness"}
            </span>
            {" "}goal.
          </p>


          <div className="flex gap-8 mt-7">

            <WorkoutHeroStat
              value={`${workouts.length}`}
              label="EXERCISES"
            />

            <WorkoutHeroStat
              value="42"
              label="MINUTES"
            />

            <WorkoutHeroStat
              value="320"
              label="EST. KCAL"
            />

          </div>

        </div>


        <div className="workout-power-circle">

          <div className="workout-power-inner">

            <Dumbbell size={35} />

            <p className="text-xs mt-3 text-gray-500">
              READINESS
            </p>

            <h3 className="text-2xl font-semibold">
              86%
            </h3>

          </div>

        </div>

      </section>


      {/* TODAY TARGET */}

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">

        <WorkoutMetric
          title="Workout Time"
          value={profile.workoutTime || "19:00"}
        />

        <WorkoutMetric
          title="Goal"
          value={profile.goal || "Fitness"}
        />

        <WorkoutMetric
          title="Intensity"
          value="Moderate"
        />

        <WorkoutMetric
          title="Recovery"
          value="84%"
        />

      </div>


      {/* EXERCISES */}

      <div className="mt-8">

        <div className="flex justify-between items-center mb-5">

          <div>
            <h2 className="text-2xl font-semibold">
              Workout Sequence
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Complete each exercise in order.
            </p>
          </div>

          <span className="text-xs text-gray-500">
            {workouts.length} exercises
          </span>

        </div>


        <div className="space-y-4">

          {workouts.map((exercise, index) => (

            <ExerciseCard
              key={exercise.name}
              exercise={exercise}
              number={index + 1}
            />

          ))}

        </div>

      </div>


      {/* AI NOTE */}

      <div className="workout-ai-note">

        <div className="workout-ai-icon">
          <Bot size={21} />
        </div>

        <div>

          <p className="text-xs tracking-[2px] text-cyan-400">
            AI COACH
          </p>

          <p className="text-gray-300 mt-2 leading-7">
            Boss {profile.name || ""}, start slowly and focus on proper
            form. Stop if you feel unusual pain, dizziness or significant
            discomfort.
          </p>

        </div>

      </div>

    </div>
  );
}
function WorkoutHeroStat({ value, label }) {
  return (
    <div>
      <p className="text-2xl font-semibold">
        {value}
      </p>

      <p className="text-[10px] tracking-[2px] text-gray-600 mt-1">
        {label}
      </p>
    </div>
  );
}


function WorkoutMetric({ title, value }) {
  return (
    <div className="workout-metric">

      <p className="text-xs text-gray-500">
        {title}
      </p>

      <p className="text-xl font-semibold mt-3">
        {value}
      </p>

    </div>
  );
}


function ExerciseCard({
  exercise,
  number
}) {

  return (
    <div className="exercise-card">

      <div className="exercise-number">
        {String(number).padStart(2, "0")}
      </div>


      <div className="flex-1">

        <p className="text-lg font-semibold">
          {exercise.name}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {exercise.target}
        </p>

      </div>


      <ExerciseInfo
        title="SETS"
        value={exercise.sets}
      />

      <ExerciseInfo
        title="REPS"
        value={exercise.reps}
      />

      <ExerciseInfo
        title="REST"
        value={exercise.rest}
      />

      <ExerciseInfo
        title="TIME"
        value={exercise.duration}
      />

      <button className="exercise-play">
        <Play size={17} />
      </button>

    </div>
  );
}


function ExerciseInfo({
  title,
  value
}) {

  return (
    <div className="exercise-info">

      <p className="text-[9px] tracking-[2px] text-gray-600">
        {title}
      </p>

      <p className="text-sm mt-1">
        {value}
      </p>

    </div>
  );
}
function WorkoutSession({
  exercises,
  activeExercise,
  setActiveExercise,
  onExit
}) {

  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false);

  const exercise =
    exercises[activeExercise];


  useEffect(() => {

    if (!running || seconds <= 0) {
      return;
    }

    const timer = setInterval(() => {

      setSeconds(prev =>
        prev > 0 ? prev - 1 : 0
      );

    }, 1000);


    return () =>
      clearInterval(timer);

  }, [running, seconds]);


  const nextExercise = () => {

    if (
      activeExercise <
      exercises.length - 1
    ) {

      setActiveExercise(
        activeExercise + 1
      );

      setSeconds(60);

      setRunning(false);

    }

  };


  return (
    <div className="workout-session">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-xs tracking-[4px] text-emerald-400">
            WORKOUT IN PROGRESS
          </p>

          <h1 className="text-3xl font-semibold mt-2">
            Training Session
          </h1>
        </div>

        <button
          onClick={onExit}
          className="session-exit"
        >
          <X size={18} />
          Exit
        </button>

      </div>


      <div className="session-main">

        <div className="session-progress">

          <p className="text-xs text-gray-500">
            EXERCISE
          </p>

          <h2 className="text-5xl font-semibold mt-4">
            {activeExercise + 1}
            <span className="text-xl text-gray-600">
              /{exercises.length}
            </span>
          </h2>

        </div>


        <div className="session-exercise">

          <div className="session-dumbbell">
            <Dumbbell size={44} />
          </div>

          <p className="text-xs tracking-[3px] text-violet-400 mt-8">
            CURRENT EXERCISE
          </p>

          <h2 className="text-4xl font-semibold mt-3">
            {exercise.name}
          </h2>

          <p className="text-gray-500 mt-2">
            {exercise.target}
          </p>


          <div className="flex justify-center gap-10 mt-8">

            <WorkoutHeroStat
              value={exercise.sets}
              label="SETS"
            />

            <WorkoutHeroStat
              value={exercise.reps}
              label="REPS"
            />

            <WorkoutHeroStat
              value={exercise.rest}
              label="REST"
            />

          </div>

        </div>


        <div className="session-timer">

          <p className="text-xs tracking-[3px] text-gray-500">
            REST TIMER
          </p>

          <h2 className="text-6xl font-semibold mt-3">
            00:{String(seconds).padStart(2, "0")}
          </h2>


          <div className="flex gap-3 mt-6">

            <button
              onClick={() =>
                setRunning(!running)
              }
              className="timer-control"
            >
              {running
                ? "Pause"
                : "Start Timer"}
            </button>

            <button
              onClick={() => {
                setSeconds(60);
                setRunning(false);
              }}
              className="timer-reset"
            >
              Reset
            </button>

          </div>

        </div>

      </div>


      <div className="flex justify-between items-center mt-7">

        <p className="text-sm text-gray-500">
          Focus on controlled movement and proper form.
        </p>

        <button
          onClick={nextExercise}
          disabled={
            activeExercise ===
            exercises.length - 1
          }
          className="next-exercise-btn"
        >
          Next Exercise
          <ChevronRight size={18} />
        </button>

      </div>

    </div>
  );
}
function RunningMode({ profile }) {

  const [runStarted, setRunStarted] = useState(false);
  const [running, setRunning] = useState(false);

  const [seconds, setSeconds] = useState(0);
  const [steps, setSteps] = useState(0);
  const [distance, setDistance] = useState(0);
  const [calories, setCalories] = useState(0);

  const [songPlaying, setSongPlaying] = useState(false);

  useEffect(() => {

    if (!running) return;

    const timer = setInterval(() => {

      setSeconds(prev => prev + 1);

      setSteps(prev => prev + Math.floor(Math.random() * 3) + 2);

      setDistance(prev =>
        Number((prev + 0.003).toFixed(3))
      );

      setCalories(prev =>
        Number((prev + 0.18).toFixed(1))
      );

    }, 1000);

    return () => clearInterval(timer);

  }, [running]);


  const formatTime = (value) => {

    const hrs = Math.floor(value / 3600);
    const mins = Math.floor((value % 3600) / 60);
    const secs = value % 60;

    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };


  const pace =
    distance > 0
      ? Math.max(
          (seconds / 60) / distance,
          0
        )
      : 0;


  const formattedPace =
    pace > 0 && pace < 99
      ? pace.toFixed(1)
      : "--";


  const resetRun = () => {

    setRunning(false);
    setRunStarted(false);

    setSeconds(0);
    setSteps(0);
    setDistance(0);
    setCalories(0);
  };


  if (!runStarted) {

    return (

      <div className="running-page">

        <div className="mb-8">

          <p className="text-[10px] tracking-[4px] text-emerald-400">
            ACTIVE PERFORMANCE
          </p>

          <h1 className="text-4xl font-semibold mt-2">
            Running Mode
          </h1>

          <p className="text-gray-500 mt-3">
            Track your run, pace, activity and music in one immersive mode.
          </p>

        </div>


        <section className="run-start-hero">

          <div>

            <p className="text-xs tracking-[3px] text-cyan-400/70">
              READY TO MOVE
            </p>

            <h2 className="text-5xl font-semibold mt-4 leading-tight">
              Run stronger.
              <br />

              <span className="text-gray-500">
                Move smarter.
              </span>
            </h2>


            <p className="text-gray-400 mt-5 max-w-lg leading-7">
              Boss {profile.name || ""},
              your daily step target is{" "}
              <span className="text-white">
                {Number(profile.stepGoal || 8000).toLocaleString()}
              </span>.
              Start a live session and your AI Coach will track the run.
            </p>


            <button
              onClick={() => {
                setRunStarted(true);
                setRunning(true);
              }}
              className="launch-run-btn"
            >
              <Play size={19} />
              Start Running
            </button>

          </div>


          <div className="run-orb">

            <div className="run-orb-glow"></div>

            <div className="run-circle run-circle-1"></div>
            <div className="run-circle run-circle-2"></div>

            <div className="run-center">

              <Activity size={42} />

              <p className="text-[9px] tracking-[3px] mt-3">
                RUN
              </p>

            </div>

          </div>

        </section>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">

          <RunPreviewCard
            title="Daily Goal"
            value={`${Number(profile.stepGoal || 8000).toLocaleString()}`}
            unit="steps"
          />

          <RunPreviewCard
            title="Recommended"
            value="30"
            unit="minutes"
          />

          <RunPreviewCard
            title="Intensity"
            value="Moderate"
            unit=""
          />

        </div>

      </div>

    );
  }


  return (

    <div className="live-run-page">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <div className="flex items-center gap-2">

            <span className={`run-live-dot ${running ? "" : "paused"}`}>
            </span>

            <p className="text-xs tracking-[3px] text-emerald-400">
              {running ? "LIVE RUN" : "RUN PAUSED"}
            </p>

          </div>

          <h1 className="text-3xl font-semibold mt-2">
            Running Session
          </h1>

        </div>


        <button
          onClick={resetRun}
          className="end-run-btn"
        >
          <X size={18} />

          End Run
        </button>

      </div>


      {/* MAIN RUN DISPLAY */}

      <section className="running-console">

        <div className="run-left-panel">

          <p className="text-xs tracking-[3px] text-gray-600">
            DISTANCE
          </p>

          <div className="flex items-end gap-3 mt-3">

            <h2 className="text-7xl font-semibold tracking-tight">
              {distance.toFixed(2)}
            </h2>

            <span className="text-lg text-gray-500 mb-3">
              KM
            </span>

          </div>


          <div className="run-route mt-12">

            <div className="run-route-line">

              <span className="run-route-start"></span>

              <span className="run-route-runner"></span>

            </div>

          </div>


          <p className="text-sm text-gray-500 mt-6">
            Keep a comfortable pace and stay aware of your surroundings.
          </p>

        </div>


        {/* CENTER */}

        <div className="run-center-panel">

          <p className="text-[10px] tracking-[4px] text-cyan-400">
            ELAPSED TIME
          </p>

          <h2 className="run-big-time">
            {formatTime(seconds)}
          </h2>


          <div className="run-pulse-core">

            <div className="run-pulse-ring"></div>

            <div className="run-pulse-ring ring-delay"></div>

            <Activity size={38} />

          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 w-full">

            <LiveRunMetric
              label="STEPS"
              value={steps.toLocaleString()}
            />

            <LiveRunMetric
              label="CALORIES"
              value={`${calories.toFixed(0)} kcal`}
            />

            <LiveRunMetric
              label="PACE"
              value={`${formattedPace} min/km`}
            />

          </div>


          <button
            onClick={() => setRunning(!running)}
            className={`run-control-btn ${
              running
                ? "run-pause"
                : "run-resume"
            }`}
          >

            {running ? (
              <>
                <span className="pause-symbol">
                  ||
                </span>

                Pause Run
              </>
            ) : (
              <>
                <Play size={19} />

                Resume Run
              </>
            )}

          </button>

        </div>


        {/* MUSIC */}

        <div className="run-music-panel">

          <p className="text-[10px] tracking-[3px] text-violet-400">
            RUN MUSIC
          </p>

          <div className="music-art">

            <Music size={36} />

            <div className={songPlaying ? "music-disc spinning" : "music-disc"}>
            </div>

          </div>


          <div className="text-center mt-6">

            <p className="text-lg font-semibold">
              Energy Run
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Fitness Mix
            </p>

          </div>


          <div className="music-progress">

            <div className="music-progress-active"></div>

          </div>


          <div className="flex justify-center items-center gap-6 mt-6">

            <button className="music-small-btn">
              ‹‹
            </button>

            <button
              onClick={() =>
                setSongPlaying(!songPlaying)
              }
              className="music-main-btn"
            >

              {songPlaying
                ? "Ⅱ"
                : <Play size={19} />
              }

            </button>

            <button className="music-small-btn">
              ››
            </button>

          </div>


          <div className="music-volume mt-7">

            <Volume2 size={16} />

            <div className="music-volume-track">

              <div className="music-volume-active"></div>

            </div>

          </div>

        </div>

      </section>


      {/* BOTTOM AI COACH */}

      <section className="run-ai-coach">

        <div className="run-ai-avatar">

          <Bot size={22} />

        </div>


        <div className="flex-1">

          <p className="text-[10px] tracking-[2px] text-cyan-400">
            AI RUNNING COACH
          </p>

          <p className="text-gray-300 mt-2">
            Boss {profile.name || ""}, maintain a pace that lets you breathe
            comfortably. You have completed {distance.toFixed(2)} km so far.
          </p>

        </div>


        <button
          className="run-coach-mic"
        >
          <Mic size={18} />
        </button>

      </section>

    </div>

  );
}
function RunPreviewCard({
  title,
  value,
  unit
}) {

  return (

    <div className="run-preview-card">

      <p className="text-xs text-gray-500">
        {title}
      </p>

      <div className="flex items-end gap-2 mt-4">

        <p className="text-3xl font-semibold">
          {value}
        </p>

        <p className="text-xs text-gray-600 mb-1">
          {unit}
        </p>

      </div>

    </div>

  );
}



function LiveRunMetric({
  label,
  value
}) {

  return (

    <div className="live-run-metric">

      <p className="text-[9px] tracking-[2px] text-gray-600">
        {label}
      </p>

      <p className="text-lg font-semibold mt-2">
        {value}
      </p>

    </div>

  );
}
function MusicPage() {

  const songs = [
    {
      id: 1,
      title: "Power Run",
      artist: "Workout Mix",
      file: "/music/song1.mp3",
      duration: "03:42"
    },
    {
      id: 2,
      title: "Morning Energy",
      artist: "Fitness Beats",
      file: "/music/song2.mp3",
      duration: "04:10"
    },
    {
      id: 3,
      title: "Cardio Flow",
      artist: "Run Mode",
      file: "/music/song3.mp3",
      duration: "03:58"
    }
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const [playing, setPlaying] = useState(false);

  const [progress, setProgress] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(0.7);


  const audioRef = useRef(null);


  const currentSong =
    songs[currentIndex];


  useEffect(() => {

    if (!audioRef.current) return;

    audioRef.current.volume = volume;

  }, [volume]);


  useEffect(() => {

    if (!audioRef.current) return;

    audioRef.current.load();

    if (playing) {

      audioRef.current
        .play()
        .catch(error => {
          console.log("Audio play error:", error);
        });

    }

  }, [currentIndex]);


  const togglePlay = () => {

    if (!audioRef.current) return;


    if (playing) {

      audioRef.current.pause();

      setPlaying(false);

    } else {

      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch(error => {
          console.log("Playback error:", error);
        });

    }

  };


  const nextSong = () => {

    setCurrentIndex(prev =>
      prev === songs.length - 1
        ? 0
        : prev + 1
    );

  };


  const previousSong = () => {

    setCurrentIndex(prev =>
      prev === 0
        ? songs.length - 1
        : prev - 1
    );

  };


  const updateProgress = () => {

    const audio = audioRef.current;

    if (!audio) return;


    const current =
      audio.currentTime || 0;

    const total =
      audio.duration || 0;


    setCurrentTime(current);

    setDuration(total);


    if (total > 0) {

      setProgress(
        (current / total) * 100
      );

    }

  };


  const seekSong = (e) => {

    const value =
      Number(e.target.value);

    const audio =
      audioRef.current;


    if (!audio || !duration) return;


    const newTime =
      (value / 100) * duration;


    audio.currentTime =
      newTime;

    setProgress(value);

  };


  const formatAudioTime = (time) => {

    if (!Number.isFinite(time)) {
      return "0:00";
    }

    const mins =
      Math.floor(time / 60);

    const secs =
      Math.floor(time % 60);

    return `${mins}:${String(secs).padStart(2, "0")}`;

  };


  return (

    <div className="music-page">

      <audio
        ref={audioRef}
        src={currentSong.file}
        onTimeUpdate={updateProgress}
        onLoadedMetadata={updateProgress}
        onEnded={nextSong}
      />


      {/* HEADER */}

      <div className="flex justify-between items-end mb-8">

        <div>

          <p className="
            text-[10px]
            tracking-[4px]
            text-violet-400
          ">
            FITNESS AUDIO
          </p>

          <h1 className="
            text-4xl
            font-semibold
            mt-2
          ">
            Music
          </h1>

          <p className="
            text-gray-500
            mt-3
          ">
            Music designed for workouts,
            running and recovery.
          </p>

        </div>


        <button className="music-library-btn">

          <Plus size={18} />

          My Playlist

        </button>

      </div>


      <section className="music-dashboard">


        {/* CURRENT SONG */}

        <div className="main-music-player">


          <div className="music-cover-large">

            <div
              className={`
                vinyl-record
                ${playing ? "vinyl-playing" : ""}
              `}
            >

              <div className="vinyl-center">

                <Music size={28} />

              </div>

            </div>

          </div>


          <div className="mt-8 text-center">

            <p className="
              text-[10px]
              tracking-[3px]
              text-cyan-400
            ">
              NOW PLAYING
            </p>

            <h2 className="
              text-3xl
              font-semibold
              mt-3
            ">
              {currentSong.title}
            </h2>

            <p className="
              text-gray-500
              mt-2
            ">
              {currentSong.artist}
            </p>

          </div>


          {/* PROGRESS */}

          <div className="mt-8">

            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={seekSong}
              className="song-range"
            />


            <div className="
              flex
              justify-between
              text-xs
              text-gray-600
              mt-2
            ">

              <span>
                {formatAudioTime(currentTime)}
              </span>

              <span>
                {formatAudioTime(duration)}
              </span>

            </div>

          </div>


          {/* CONTROLS */}

          <div className="
            flex
            justify-center
            items-center
            gap-8
            mt-7
          ">

            <button
              onClick={previousSong}
              className="music-secondary-control"
            >

              <SkipBack size={22} />

            </button>


            <button
              onClick={togglePlay}
              className="music-primary-control"
            >

              {playing
                ? <Pause size={25} />
                : <Play size={25} />
              }

            </button>


            <button
              onClick={nextSong}
              className="music-secondary-control"
            >

              <SkipForward size={22} />

            </button>

          </div>


          {/* VOLUME */}

          <div className="
            flex
            items-center
            gap-4
            mt-8
          ">

            <Volume2
              size={17}
              className="text-gray-500"
            />

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) =>
                setVolume(
                  Number(e.target.value)
                )
              }
              className="volume-range"
            />

          </div>

        </div>


        {/* PLAYLIST */}

        <div className="music-playlist">

          <div className="
            flex
            justify-between
            items-center
            mb-6
          ">

            <div>

              <p className="
                text-[10px]
                tracking-[3px]
                text-gray-600
              ">
                YOUR PLAYLIST
              </p>

              <h3 className="
                text-2xl
                font-semibold
                mt-2
              ">
                Workout Energy
              </h3>

            </div>


            <p className="
              text-xs
              text-gray-600
            ">
              {songs.length} songs
            </p>

          </div>


          <div className="space-y-3">

            {songs.map((song, index) => (

              <div
                key={song.id}
                onClick={() => {

                  setCurrentIndex(index);

                  setPlaying(true);

                  setTimeout(() => {

                    audioRef.current
                      ?.play()
                      .catch(() => {});

                  }, 50);

                }}
                className={`
                  playlist-song
                  ${
                    index === currentIndex
                      ? "playlist-active"
                      : ""
                  }
                `}
              >

                <div className="playlist-number">

                  {index === currentIndex &&
                  playing
                    ? (
                      <div className="mini-wave">

                        <span></span>
                        <span></span>
                        <span></span>

                      </div>
                    )
                    : String(index + 1).padStart(2, "0")
                  }

                </div>


                <div className="flex-1">

                  <p className="font-medium">
                    {song.title}
                  </p>

                  <p className="
                    text-xs
                    text-gray-600
                    mt-1
                  ">
                    {song.artist}
                  </p>

                </div>


                <span className="
                  text-xs
                  text-gray-600
                ">
                  {song.duration}
                </span>


                <Heart
                  size={16}
                  className="text-gray-600"
                />

              </div>

            ))}

          </div>


          {/* RUN MODE CARD */}

          <div className="music-running-card">

            <Activity
              size={22}
              className="text-emerald-400"
            />

            <div>

              <p className="font-medium">
                Running Mode Ready
              </p>

              <p className="
                text-xs
                text-gray-500
                mt-1
              ">
                Continue listening during your run.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
}
function HealthReports({ profile }) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisReady, setAnalysisReady] = useState(false);

  const [reports, setReports] = useState(() => {
    const saved = localStorage.getItem("healthReports");

    return saved
      ? JSON.parse(saved)
      : [];
  });


  useEffect(() => {

    localStorage.setItem(
      "healthReports",
      JSON.stringify(reports)
    );

  }, [reports]);


  useEffect(() => {

    return () => {

      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }

    };

  }, [previewUrl]);


  const handleFile = (file) => {

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp"
    ];


    if (!allowedTypes.includes(file.type)) {

      alert(
        "Please upload PDF, JPG, PNG or WEBP file."
      );

      return;
    }


    if (file.size > 10 * 1024 * 1024) {

      alert(
        "File size should be below 10 MB."
      );

      return;
    }


    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }


    setSelectedFile(file);

    setPreviewUrl(
      URL.createObjectURL(file)
    );

    setAnalysisReady(false);

  };


  const handleUploadChange = (e) => {

    const file = e.target.files?.[0];

    handleFile(file);

  };


  const analyzeReport = () => {

    if (!selectedFile) return;

    setAnalyzing(true);
    setAnalysisReady(false);


    // UI DEMO ONLY.
    // Actual report parsing will be connected
    // to Spring Boot backend in the next step.

    setTimeout(() => {

      const report = {
        id: Date.now(),
        name: selectedFile.name,
        type: selectedFile.type,
        date: new Date().toLocaleDateString(),
        status: "Uploaded"
      };


      setReports(prev => [
        report,
        ...prev.filter(
          item => item.name !== selectedFile.name
        )
      ]);


      setAnalyzing(false);
      setAnalysisReady(true);

    }, 1200);

  };


  const removeReport = (id) => {

    setReports(prev =>
      prev.filter(
        report => report.id !== id
      )
    );

  };


  return (

    <div className="reports-page">

      {/* HEADER */}

      <div className="flex justify-between items-end mb-8">

        <div>

          <p className="
            text-[10px]
            tracking-[4px]
            text-cyan-400
          ">
            AI HEALTH INTELLIGENCE
          </p>

          <h1 className="
            text-4xl
            font-semibold
            mt-2
          ">
            Health Reports
          </h1>

          <p className="
            text-gray-500
            mt-3
            max-w-2xl
          ">
            Upload a lab report and your AI Health Coach
            will help explain reported values in simple language.
          </p>

        </div>


        <div className="report-security-badge">

          <ShieldCheck size={17} />

          Health data protected

        </div>

      </div>


      {/* SAFETY NOTICE */}

      <div className="medical-safety-banner">

        <AlertTriangle size={18} />

        <div>

          <p className="font-medium">
            Medical information support only
          </p>

          <p className="
            text-sm
            text-gray-500
            mt-1
          ">
            This feature should explain report information,
            not diagnose disease or replace a qualified clinician.
          </p>

        </div>

      </div>


      <div className="
        grid
        grid-cols-[1.05fr_1fr]
        gap-6
        mt-6
      ">

        {/* UPLOAD */}

        <section className="report-upload-card">

          <div>

            <p className="
              text-[10px]
              tracking-[3px]
              text-gray-600
            ">
              NEW ANALYSIS
            </p>

            <h2 className="
              text-2xl
              font-semibold
              mt-2
            ">
              Upload Health Report
            </h2>

          </div>


          <label className="report-drop-zone">

            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.webp"
              onChange={handleUploadChange}
              hidden
            />

            <div className="report-upload-icon">
              <Upload size={28} />
            </div>


            <p className="
              text-lg
              font-medium
              mt-5
            ">
              Drop or choose your report
            </p>

            <p className="
              text-sm
              text-gray-600
              mt-2
            ">
              PDF, JPG, PNG or WEBP • Max 10 MB
            </p>


            <span className="choose-report-btn">
              Choose Report
            </span>

          </label>


          {selectedFile && (

            <div className="selected-report">

              <div className="selected-report-icon">

                <FileText size={22} />

              </div>


              <div className="flex-1">

                <p className="font-medium truncate">
                  {selectedFile.name}
                </p>

                <p className="
                  text-xs
                  text-gray-600
                  mt-1
                ">
                  {(selectedFile.size / 1024 / 1024)
                    .toFixed(2)} MB
                </p>

              </div>


              <CheckCircle2
                size={20}
                className="text-emerald-400"
              />

            </div>

          )}


          <button
            onClick={analyzeReport}
            disabled={!selectedFile || analyzing}
            className="analyze-report-btn"
          >

            {analyzing ? (

              <>
                <LoaderCircle
                  size={19}
                  className="animate-spin"
                />

                Preparing Analysis...
              </>

            ) : (

              <>
                <Brain size={19} />

                Analyze with AI
              </>

            )}

          </button>

        </section>


        {/* PREVIEW */}

        <section className="report-preview-card">

          <div className="
            flex
            justify-between
            items-center
          ">

            <div>

              <p className="
                text-[10px]
                tracking-[3px]
                text-gray-600
              ">
                DOCUMENT
              </p>

              <h3 className="
                text-xl
                font-semibold
                mt-2
              ">
                Report Preview
              </h3>

            </div>

            {selectedFile && (
              <Eye
                size={18}
                className="text-gray-500"
              />
            )}

          </div>


          {!selectedFile && (

            <div className="empty-report-preview">

              <FileText size={40} />

              <p className="mt-4">
                No report selected
              </p>

              <p className="
                text-sm
                text-gray-600
                mt-1
              ">
                Upload a document to preview it.
              </p>

            </div>

          )}


          {selectedFile?.type.startsWith("image/") && (

            <div className="image-report-preview">

              <img
                src={previewUrl}
                alt="Health report preview"
              />

            </div>

          )}


          {selectedFile?.type === "application/pdf" && (

            <div className="pdf-report-preview">

              <FileText size={55} />

              <p className="
                font-medium
                mt-4
              ">
                PDF selected
              </p>

              <p className="
                text-xs
                text-gray-600
                mt-1
              ">
                {selectedFile.name}
              </p>

            </div>

          )}

        </section>

      </div>


      {/* ANALYSIS RESULT */}

      {analysisReady && (

        <section className="report-analysis">

          <div className="
            flex
            justify-between
            items-start
          ">

            <div>

              <p className="
                text-[10px]
                tracking-[3px]
                text-emerald-400
              ">
                REPORT READY
              </p>

              <h2 className="
                text-2xl
                font-semibold
                mt-2
              ">
                Analysis Workspace
              </h2>

            </div>


            <CheckCircle2
              size={25}
              className="text-emerald-400"
            />

          </div>


          <div className="
            grid
            grid-cols-1 lg:grid-cols-3
            gap-4
            mt-6
          ">

            <ReportStatusCard
              title="Document"
              value="Received"
              status="success"
            />

            <ReportStatusCard
              title="Data Extraction"
              value="Backend Pending"
              status="pending"
            />

            <ReportStatusCard
              title="AI Explanation"
              value="Backend Pending"
              status="pending"
            />

          </div>


          <div className="report-placeholder-analysis">

            <Brain size={23} />

            <div>

              <p className="font-medium">
                Report uploaded successfully
              </p>

              <p className="
                text-sm
                text-gray-500
                mt-2
                leading-6
              ">
                The frontend is ready. In the next step,
                Spring Boot will receive this file, extract
                report values and send structured data to the
                AI explanation layer. No medical values are being
                guessed in this version.
              </p>

            </div>

          </div>

        </section>

      )}


      {/* HISTORY */}

      <section className="report-history">

        <div className="
          flex
          justify-between
          items-center
          mb-5
        ">

          <div>

            <p className="
              text-[10px]
              tracking-[3px]
              text-gray-600
            ">
              HISTORY
            </p>

            <h2 className="
              text-2xl
              font-semibold
              mt-2
            ">
              Previous Reports
            </h2>

          </div>

          <span className="
            text-xs
            text-gray-600
          ">
            {reports.length} reports
          </span>

        </div>


        {reports.length === 0 ? (

          <div className="empty-report-history">

            <Clock size={25} />

            <p>
              No previous reports yet.
            </p>

          </div>

        ) : (

          <div className="space-y-3">

            {reports.map(report => (

              <div
                key={report.id}
                className="report-history-item"
              >

                <div className="history-report-icon">
                  <FileText size={19} />
                </div>


                <div className="flex-1">

                  <p className="font-medium">
                    {report.name}
                  </p>

                  <p className="
                    text-xs
                    text-gray-600
                    mt-1
                  ">
                    Uploaded {report.date}
                  </p>

                </div>


                <span className="report-status">
                  {report.status}
                </span>


                <button
                  onClick={() =>
                    removeReport(report.id)
                  }
                  className="report-delete"
                >
                  <Trash2 size={17} />
                </button>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>

  );
}



function ReportStatusCard({
  title,
  value,
  status
}) {

  return (

    <div className="report-status-card">

      <p className="
        text-[10px]
        tracking-[2px]
        text-gray-600
      ">
        {title}
      </p>

      <div className="
        flex
        items-center
        gap-2
        mt-3
      ">

        <span
          className={
            status === "success"
              ? "status-dot-success"
              : "status-dot-pending"
          }
        >
        </span>

        <p className="font-medium">
          {value}
        </p>

      </div>

    </div>

  );
}
function ReminderPage({ profile }) {

  const defaultReminders = [
    {
      id: 1,
      title: "Drink Water",
      type: "Water",
      time: "10:00",
      enabled: true
    },
    {
      id: 2,
      title: "Lunch Time",
      type: "Meal",
      time: "13:30",
      enabled: true
    },
    {
      id: 3,
      title: "Workout Time",
      type: "Workout",
      time: profile.workoutTime || "19:00",
      enabled: true
    },
    {
      id: 4,
      title: "Evening Walk",
      type: "Walk",
      time: "20:15",
      enabled: true
    },
    {
      id: 5,
      title: "Sleep Preparation",
      type: "Sleep",
      time: "22:30",
      enabled: true
    }
  ];


  const [reminders, setReminders] = useState(() => {

    const saved =
      localStorage.getItem("fitnessReminders");

    return saved
      ? JSON.parse(saved)
      : defaultReminders;

  });


  const [newReminder, setNewReminder] = useState({
    title: "",
    type: "Water",
    time: "09:00"
  });


  useEffect(() => {

    localStorage.setItem(
      "fitnessReminders",
      JSON.stringify(reminders)
    );

  }, [reminders]);


  const toggleReminder = (id) => {

    setReminders(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              enabled: !item.enabled
            }
          : item
      )
    );

  };


  const deleteReminder = (id) => {

    setReminders(prev =>
      prev.filter(item => item.id !== id)
    );

  };


  const addReminder = () => {

    if (!newReminder.title.trim()) {
      return;
    }


    setReminders(prev => [
      ...prev,
      {
        id: Date.now(),
        ...newReminder,
        enabled: true
      }
    ]);


    setNewReminder({
      title: "",
      type: "Water",
      time: "09:00"
    });

  };


  const speakReminder = (reminder) => {

    if (!("speechSynthesis" in window)) {
      return;
    }


    window.speechSynthesis.cancel();


    const speech =
      new SpeechSynthesisUtterance(
        `Boss ${profile.name || ""}, ${reminder.title} ka time ho gaya hai.`
      );


    speech.lang = "en-IN";

    speech.rate = 0.95;

    window.speechSynthesis.speak(speech);

  };


  return (

    <div className="reminder-page">

      <div className="flex justify-between items-end mb-8">

        <div>

          <p className="text-[10px] tracking-[4px] text-cyan-400">
            SMART ROUTINE
          </p>

          <h1 className="text-4xl font-semibold mt-2">
            Reminders
          </h1>

          <p className="text-gray-500 mt-3">
            Stay consistent with water, meals, workouts and sleep.
          </p>

        </div>


        <div className="reminder-summary">

          <p className="text-xs text-gray-500">
            ACTIVE
          </p>

          <p className="text-2xl font-semibold mt-1">
            {
              reminders.filter(
                reminder => reminder.enabled
              ).length
            }
          </p>

        </div>

      </div>


      {/* HERO */}

      <section className="reminder-hero">

        <div>

          <p className="text-xs tracking-[3px] text-emerald-400">
            AI DAILY ASSISTANT
          </p>

          <h2 className="text-3xl font-semibold mt-4">
            Your routine, never missed.
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl leading-7">
            Boss {profile.name || ""},
            your AI companion can remind you about hydration,
            meals, workouts, walking and sleep.
          </p>

        </div>


        <div className="reminder-orb">

          <Timer size={38} />

          <div className="reminder-ring"></div>

        </div>

      </section>


      {/* ADD REMINDER */}

      <section className="add-reminder-card">

        <div>

          <p className="text-xs text-gray-500">
            CREATE NEW
          </p>

          <h3 className="text-xl font-semibold mt-1">
            Add Reminder
          </h3>

        </div>


        <input
          type="text"
          value={newReminder.title}
          onChange={(e) =>
            setNewReminder({
              ...newReminder,
              title: e.target.value
            })
          }
          placeholder="Example: Take medicine"
          className="reminder-input"
        />


        <select
          value={newReminder.type}
          onChange={(e) =>
            setNewReminder({
              ...newReminder,
              type: e.target.value
            })
          }
          className="reminder-input"
        >

          <option>Water</option>
          <option>Meal</option>
          <option>Workout</option>
          <option>Walk</option>
          <option>Sleep</option>
          <option>Medicine</option>

        </select>


        <input
          type="time"
          value={newReminder.time}
          onChange={(e) =>
            setNewReminder({
              ...newReminder,
              time: e.target.value
            })
          }
          className="reminder-input"
        />


        <button
          onClick={addReminder}
          className="add-reminder-btn"
        >
          <Plus size={18} />
          Add Reminder
        </button>

      </section>


      {/* REMINDER LIST */}

      <div className="reminder-list">

        {reminders.map(reminder => (

          <div
            key={reminder.id}
            className={`
              reminder-item
              ${reminder.enabled ? "" : "reminder-disabled"}
            `}
          >

            <div className="reminder-icon">
              <Timer size={19} />
            </div>


            <div className="flex-1">

              <p className="font-medium">
                {reminder.title}
              </p>

              <p className="text-xs text-gray-600 mt-1">
                {reminder.type}
              </p>

            </div>


            <div className="reminder-time">
              {reminder.time}
            </div>


            <button
              onClick={() =>
                speakReminder(reminder)
              }
              className="reminder-speak-btn"
            >
              <Volume2 size={17} />
            </button>


            <button
              onClick={() =>
                toggleReminder(reminder.id)
              }
              className={`
                reminder-toggle
                ${reminder.enabled
                  ? "reminder-toggle-on"
                  : ""
                }
              `}
            >

              <span></span>

            </button>


            <button
              onClick={() =>
                deleteReminder(reminder.id)
              }
              className="reminder-delete"
            >
              <Trash2 size={17} />
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}
function ProgressPage({ profile }) {

  const weightData = [
    { week: "W1", weight: 82 },
    { week: "W2", weight: 81.5 },
    { week: "W3", weight: 80.8 },
    { week: "W4", weight: 80.2 },
    { week: "W5", weight: 79.6 },
    { week: "W6", weight: Number(profile.weight) || 79 },
  ];

  const stepsData = [
    { day: "Mon", steps: 6200 },
    { day: "Tue", steps: 7500 },
    { day: "Wed", steps: 6800 },
    { day: "Thu", steps: 8100 },
    { day: "Fri", steps: 7200 },
    { day: "Sat", steps: 9400 },
    { day: "Sun", steps: 6542 },
  ];

  const currentWeight =
    Number(profile.weight) || 79;

  const targetWeight =
    Number(profile.targetWeight) || 75;

  const startingWeight = 82;

  const totalGoal =
    Math.abs(startingWeight - targetWeight);

  const progressMade =
    Math.abs(startingWeight - currentWeight);

  const weightProgress =
    totalGoal > 0
      ? Math.min(
          Math.round(
            (progressMade / totalGoal) * 100
          ),
          100
        )
      : 100;


  return (
    <div className="progress-page">

      {/* HEADER */}

      <div className="flex justify-between items-end mb-8">

        <div>

          <p className="text-[10px] tracking-[4px] text-emerald-400">
            PERSONAL PERFORMANCE
          </p>

          <h1 className="text-4xl font-semibold mt-2">
            Progress
          </h1>

          <p className="text-gray-500 mt-3">
            Track your fitness journey, activity and consistency.
          </p>

        </div>


        <div className="progress-badge">

          <TrendingUp size={17} />

          Improving
        </div>

      </div>


      {/* HERO */}

      <section className="progress-hero">

        <div>

          <p className="text-xs tracking-[3px] text-cyan-400">
            FITNESS JOURNEY
          </p>

          <h2 className="text-4xl font-semibold mt-4">
            You're making progress.
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl leading-7">
            Boss {profile.name || ""},
            consistency across workouts, nutrition,
            steps and recovery is moving you closer
            to your target.
          </p>


          <div className="flex gap-10 mt-8">

            <ProgressHeroStat
              value={`${currentWeight} kg`}
              label="CURRENT WEIGHT"
            />

            <ProgressHeroStat
              value={`${targetWeight} kg`}
              label="TARGET WEIGHT"
            />

            <ProgressHeroStat
              value={`${weightProgress}%`}
              label="GOAL PROGRESS"
            />

          </div>

        </div>


        <div className="progress-ring">

          <div
            className="progress-ring-fill"
            style={{
              "--progress":
                `${weightProgress * 3.6}deg`
            }}
          >

            <div className="progress-ring-inner">

              <p className="text-4xl font-semibold">
                {weightProgress}%
              </p>

              <p className="text-[10px] tracking-[2px] text-gray-500 mt-1">
                COMPLETED
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SUMMARY CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">

        <ProgressMetric
          title="Weekly Steps"
          value="51.7K"
          change="+12%"
        />

        <ProgressMetric
          title="Calories Burned"
          value="2,840"
          change="+8%"
        />

        <ProgressMetric
          title="Workouts"
          value="5 / 6"
          change="83%"
        />

        <ProgressMetric
          title="Active Minutes"
          value="248"
          change="+17%"
        />

      </div>


      {/* CHARTS */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">

        {/* WEIGHT */}

        <section className="progress-chart-card">

          <div className="flex justify-between mb-6">

            <div>

              <p className="text-[10px] tracking-[3px] text-gray-600">
                BODY PROGRESS
              </p>

              <h3 className="text-xl font-semibold mt-2">
                Weight Trend
              </h3>

            </div>


            <div className="text-right">

              <p className="text-xl font-semibold">
                {currentWeight} kg
              </p>

              <p className="text-xs text-emerald-400 mt-1">
                Trending toward goal
              </p>

            </div>

          </div>


          <div className="h-[260px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart data={weightData}>

                <defs>

                  <linearGradient
                    id="weightGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="5%"
                      stopColor="#34d399"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="95%"
                      stopColor="#34d399"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>


                <XAxis
                  dataKey="week"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#6b7280",
                    fontSize: 11
                  }}
                />


                <YAxis
                  domain={[
                    targetWeight - 2,
                    startingWeight + 2
                  ]}
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#4b5563",
                    fontSize: 10
                  }}
                />


                <Tooltip
                  contentStyle={{
                    background: "#07100f",
                    border:
                      "1px solid rgba(255,255,255,.08)",
                    borderRadius: "14px"
                  }}
                />


                <Area
                  type="monotone"
                  dataKey="weight"
                  stroke="#34d399"
                  strokeWidth={3}
                  fill="url(#weightGradient)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </section>


        {/* STEPS */}

        <section className="progress-chart-card">

          <div className="flex justify-between mb-6">

            <div>

              <p className="text-[10px] tracking-[3px] text-gray-600">
                ACTIVITY
              </p>

              <h3 className="text-xl font-semibold mt-2">
                Weekly Steps
              </h3>

            </div>


            <div className="text-right">

              <p className="text-xl font-semibold">
                51,742
              </p>

              <p className="text-xs text-cyan-400 mt-1">
                7-day total
              </p>

            </div>

          </div>


          <div className="h-[260px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart data={stepsData}>

                <defs>

                  <linearGradient
                    id="progressStepsGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="5%"
                      stopColor="#22d3ee"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="95%"
                      stopColor="#22d3ee"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>


                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#6b7280",
                    fontSize: 11
                  }}
                />


                <YAxis hide />


                <Tooltip
                  contentStyle={{
                    background: "#071018",
                    border:
                      "1px solid rgba(255,255,255,.08)",
                    borderRadius: "14px"
                  }}
                />


                <Area
                  type="monotone"
                  dataKey="steps"
                  stroke="#22d3ee"
                  strokeWidth={3}
                  fill="url(#progressStepsGradient)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </section>

      </div>


      {/* WEEK SUMMARY */}

      <section className="week-summary mt-6">

        <div>

          <p className="text-[10px] tracking-[3px] text-violet-400">
            THIS WEEK
          </p>

          <h3 className="text-2xl font-semibold mt-2">
            Weekly Performance
          </h3>

        </div>


        <div className="week-summary-grid">

          <WeekScore
            title="Nutrition"
            score={88}
          />

          <WeekScore
            title="Workout"
            score={83}
          />

          <WeekScore
            title="Hydration"
            score={79}
          />

          <WeekScore
            title="Sleep"
            score={86}
          />

        </div>

      </section>


      {/* AI INSIGHT */}

      <section className="progress-ai-note">

        <div className="progress-ai-icon">
          <Bot size={21} />
        </div>

        <div>

          <p className="text-xs tracking-[2px] text-cyan-400">
            AI PROGRESS INSIGHT
          </p>

          <p className="text-gray-300 mt-2 leading-7">
            Boss {profile.name || ""},
            your current trend looks consistent.
            Keep focusing on sustainable habits rather
            than trying to change weight or activity too quickly.
          </p>

        </div>

      </section>

    </div>
  );
}
function ProgressHeroStat({
  value,
  label
}) {

  return (
    <div>

      <p className="text-2xl font-semibold">
        {value}
      </p>

      <p className="text-[9px] tracking-[2px] text-gray-600 mt-1">
        {label}
      </p>

    </div>
  );
}


function ProgressMetric({
  title,
  value,
  change
}) {

  return (
    <div className="progress-metric">

      <p className="text-xs text-gray-500">
        {title}
      </p>

      <div className="flex justify-between items-end mt-4">

        <p className="text-3xl font-semibold">
          {value}
        </p>

        <span className="progress-change">
          {change}
        </span>

      </div>

    </div>
  );
}


function WeekScore({
  title,
  score
}) {

  return (
    <div className="week-score">

      <div className="flex justify-between">

        <p className="text-sm text-gray-400">
          {title}
        </p>

        <p className="text-sm">
          {score}%
        </p>

      </div>


      <div className="week-score-track">

        <div
          className="week-score-fill"
          style={{
            width: `${score}%`
          }}
        />

      </div>

    </div>
  );
}

export default App;