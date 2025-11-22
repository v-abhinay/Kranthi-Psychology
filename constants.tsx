import { 
  Heart, 
  Brain, 
  Briefcase, 
  Users, 
  UserPlus, 
  ShieldCheck, 
  Activity, 
  LifeBuoy,
  Anchor
} from 'lucide-react';
import { Service, Testimonial, FaqItem, NavigationLink } from './types';

export const NAV_LINKS: NavigationLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    content: "I was hesitant to seek help for my anxiety, but the atmosphere here is so welcoming. I finally feel understood and have tools to manage my stress.",
    author: "Ramesh K.",
    role: "Software Engineer"
  },
  {
    id: 2,
    content: "Marriage counselling saved our relationship. We learned how to communicate without fighting. Highly recommend Kranthi Psychology Clinic.",
    author: "Priya & Sunil",
    role: "Couple"
  },
  {
    id: 3,
    content: "The career guidance helped me navigate a very difficult burnout phase. I now have clarity on my professional path.",
    author: "Anitha S.",
    role: "Corporate Professional"
  },
  {
    id: 4,
    content: "Recovery is hard, but the structured de-addiction support I received here gave me my life back. Forever grateful.",
    author: "Vikram M.",
    role: "Individual"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How do I know if I need counselling?",
    answer: "If you are feeling overwhelmed, stuck, or finding it difficult to cope with daily life, emotions, or relationships, counselling can provide clarity and support. You don't need a severe diagnosis to seek help."
  },
  {
    question: "Are the sessions confidential?",
    answer: "Absolutely. We adhere to strict professional ethics regarding client confidentiality. Your privacy is our top priority."
  },
  {
    question: "How long does a session last?",
    answer: "A standard individual counselling session typically lasts between 45 to 60 minutes."
  },
  {
    question: "Do you offer online counselling?",
    answer: "Yes, we offer secure online video consultations for clients across India who cannot visit the clinic in person."
  },
  {
    question: "What is the difference between counselling and psychotherapy?",
    answer: "Counselling often focuses on specific current issues and is shorter-term, while psychotherapy delves deeper into chronic emotional patterns and may be longer-term. We provide both based on your needs."
  },
  {
    question: "Do you prescribe medication?",
    answer: "As psychologists, we focus on therapy and counselling. If medication is required, we can refer you to a trusted psychiatrist for a collaborative approach."
  }
];

export const SERVICES: Service[] = [
  {
    id: "psychological-counselling",
    title: "Psychological Counselling",
    icon: Brain,
    shortDescription: "Expert support for anxiety, depression, and emotional instability.",
    fullDescription: "Psychological counselling provides a safe environment to explore your thoughts and feelings. We help you navigate anxiety, depression, mood swings, and emotional instability through evidence-based techniques.",
    benefits: [
      "Reduced anxiety and stress levels",
      "Better emotional regulation",
      "Understanding root causes of distress",
      "Tools for daily coping"
    ],
    whoIsItFor: [
      "Individuals feeling constantly worried or sad",
      "Those experiencing mood swings",
      "Anyone feeling emotionally overwhelmed"
    ],
    commonProblems: [
      "Generalized Anxiety",
      "Depressive episodes",
      "Panic attacks",
      "Chronic stress"
    ],
    process: [
      "Initial Assessment",
      "Goal Setting",
      "Therapy Sessions (CBT/Mindfulness)",
      "Progress Review"
    ]
  },
  {
    id: "marriage-counselling",
    title: "Marriage & Couples Counselling",
    icon: Heart,
    shortDescription: "Resolve conflicts and rebuild intimacy in your relationship.",
    fullDescription: "Relationships require work. Our marriage counselling helps couples break negative communication cycles, heal from emotional distance, and rebuild trust and intimacy.",
    benefits: [
      "Improved communication skills",
      "Conflict resolution strategies",
      "Rebuilding trust and intimacy",
      "Shared vision for the future"
    ],
    whoIsItFor: [
      "Couples dealing with frequent arguments",
      "Partners feeling emotionally distant",
      "Couples recovering from infidelity",
      "Premarital couples seeking guidance"
    ],
    commonProblems: [
      "Communication breakdown",
      "Trust issues",
      "Financial or parenting conflicts",
      "Lack of intimacy"
    ],
    process: [
      "Joint Assessment",
      "Individual Sessions (if needed)",
      "Communication Workshops",
      "Conflict Resolution Practice"
    ]
  },
  {
    id: "de-addiction-counselling",
    title: "De-Addiction Counselling",
    icon: ShieldCheck,
    shortDescription: "Structured support for recovery from alcohol and substance use.",
    fullDescription: "Addiction affects the whole person. Our de-addiction counselling offers a structured, non-judgmental path to recovery, focusing on triggers, relapse prevention, and rebuilding a healthy life.",
    benefits: [
      "Understanding addiction triggers",
      "Relapse prevention strategies",
      "Rebuilding self-esteem",
      "Family support guidance"
    ],
    whoIsItFor: [
      "Individuals struggling with alcohol or drug use",
      "People facing behavioral addictions (gaming, gambling)",
      "Families seeking to support a loved one"
    ],
    commonProblems: [
      "Substance dependency",
      "Withdrawal management (psychological)",
      "Loss of control",
      "Impact on work and family"
    ],
    process: [
      "Readiness Assessment",
      "Trigger Identification",
      "Coping Strategy Development",
      "Long-term Maintenance Plan"
    ]
  },
  {
    id: "career-counselling",
    title: "Career & Adjustment Counselling",
    icon: Briefcase,
    shortDescription: "Guidance for burnout, career transitions, and work stress.",
    fullDescription: "Work life can be a major source of stress. Whether you are facing burnout, confusion about your career path, or struggling to adjust to a new role, we provide clarity and strategies for professional well-being.",
    benefits: [
      "Clarity on career goals",
      "Stress and burnout management",
      "Improved work-life balance",
      "Confidence in decision making"
    ],
    whoIsItFor: [
      "Professionals facing burnout",
      "Students confused about career paths",
      "Individuals in new life transitions"
    ],
    commonProblems: [
      "Workplace burnout",
      "Imposter syndrome",
      "Career confusion",
      "Adjustment disorders"
    ],
    process: [
      "Career Assessment",
      "Stress Audit",
      "Strategy Formulation",
      "Skill Building"
    ]
  },
  {
    id: "parenting-counselling",
    title: "Parenting Counselling",
    icon: Users,
    shortDescription: "Support for raising happy, resilient children.",
    fullDescription: "Parenting is rewarding but challenging. We help parents understand their children's behavioral needs, improve parent-child bonding, and manage the stress of modern parenting.",
    benefits: [
      "Better understanding of child psychology",
      "Effective discipline strategies",
      "Reduced parenting stress",
      "Stronger parent-child bond"
    ],
    whoIsItFor: [
      "New parents",
      "Parents of teenagers",
      "Parents dealing with behavioral issues"
    ]
  },
  {
    id: "psychotherapy",
    title: "Psychotherapy",
    icon: Activity,
    shortDescription: "Deep healing for long-standing emotional patterns.",
    fullDescription: "For deeper emotional wounds, trauma, or personality patterns, psychotherapy offers a profound healing process. We use evidence-informed approaches to foster long-term change.",
    benefits: [
      "Healing from past trauma",
      "Personality integration",
      "Deep self-awareness",
      "Resolution of chronic patterns"
    ],
    whoIsItFor: [
      "Survivors of trauma",
      "Individuals with chronic relationship patterns",
      "Those seeking deep personal growth"
    ]
  },
  {
    id: "suicide-prevention",
    title: "Crisis & Suicide Prevention Support",
    icon: LifeBuoy,
    shortDescription: "Compassionate, immediate support for severe distress.",
    fullDescription: "If you are feeling hopeless, you are not alone. We provide a safe, sensitive space to talk about your pain and find reasons to hold on. *Note: For immediate emergencies, please contact local emergency helplines.*",
    benefits: [
      "Immediate emotional stabilization",
      "Safety planning",
      "Hope instillation",
      "Connection to resources"
    ],
    whoIsItFor: [
      "Individuals feeling hopeless",
      "Families concerned about a loved one",
      "Anyone in severe emotional pain"
    ]
  },
  {
    id: "emotional-counselling",
    title: "Emotional Counselling",
    icon: Anchor,
    shortDescription: "Navigate grief, loss, and emotional overwhelm.",
    fullDescription: "Life throws many challenges our way. Emotional counselling helps you process grief, loss, anger, or general overwhelm in a supportive environment.",
    benefits: [
      "Grief processing",
      "Anger management",
      "Emotional resilience",
      "Clarity of thought"
    ],
    whoIsItFor: [
      "Those grieving a loss",
      "Individuals struggling with anger",
      "People feeling stuck in life"
    ]
  }
];
