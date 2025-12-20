import { AcademicData } from '../types';

/*
* =================================================================================
* EDIT THIS FILE TO UPDATE YOUR WEBSITE CONTENT
* =================================================================================
*
* Instructions:
* 1. Personal Info: Update your name, title, bio, and social media links.
* 2. Publications: Add, remove, or edit your publications.
*    - `featured: true` will highlight it on the homepage.
* 3. News: Add, remove, or edit news items.
*    - `featured: true` will highlight it on the homepage.
* 4. Blog: Add, remove, or edit blog posts.
*    - Use Markdown for the `content` field to add images, code, and formatting.
*    - `slug` should be a unique, URL-friendly identifier.
*    - `featured: true` will highlight it on the homepage.
* 5. CV: Update your education, experience, and awards.
*    - Add the URL to your downloadable CV PDF.
*
*/

export const academicData: AcademicData = {
  personalInfo: {
    name: 'Dr. Evelyn Reed',
    title: 'Assistant Professor of Computational Linguistics',
    // Added missing required researchArea property
    researchArea: 'Natural Language Processing, Machine Learning, and Cognitive Science',
    bio: 'I am an Assistant Professor at the Institute for Advanced Study, focusing on the intersection of natural language processing, machine learning, and cognitive science. My research aims to build computational models that can understand and generate human language with greater fluency and contextual awareness. I am particularly interested in multimodal learning and how language grounds in sensory experience.',
    profilePictureUrl: 'https://picsum.photos/id/1027/400/400',
    socialLinks: [
      { name: 'Email', url: 'mailto:evelyn.reed@example.edu' },
      { name: 'Google Scholar', url: '#' },
      { name: 'Twitter', url: '#' },
      { name: 'GitHub', url: '#' },
      { name: 'LinkedIn', url: '#' },
    ],
  },
  publications: [
    {
      id: 1,
      title: 'Grounding Language Models in Visual Perception for Enhanced Scene Description',
      authors: ['Evelyn Reed', 'Ben Carter', 'Sophia Chen'],
      venue: 'Proceedings of the Annual Meeting of the Association for Computational Linguistics (ACL)',
      year: 2024,
      featured: true,
      links: [
        { name: 'PDF', url: '#' },
        { name: 'DOI', url: '#' },
        { name: 'Code', url: '#' },
      ],
    },
    {
      id: 2,
      title: 'A Framework for Few-Shot Cross-Lingual Transfer Learning',
      authors: ['Evelyn Reed', 'David Lee'],
      venue: 'Conference on Empirical Methods in Natural Language Processing (EMNLP)',
      year: 2023,
      links: [
        { name: 'PDF', url: '#' },
        { name: 'DOI', url: '#' },
      ],
    },
    {
      id: 3,
      title: 'Probing the Compositional Limits of Large Language Models',
      authors: ['Sophia Chen', 'Evelyn Reed'],
      venue: 'Transactions of the Association for Computational Linguistics (TACL)',
      year: 2023,
      featured: true,
      links: [
        { name: 'PDF', url: '#' },
        { name: 'DOI', url: '#' },
        { name: 'Project', url: '#' },
      ],
    },
    {
        id: 4,
        title: 'Cognitive Biases in Neural Language Generation',
        authors: ['Ben Carter', 'Evelyn Reed', 'Maria Rodriguez'],
        venue: 'Journal of Artificial Intelligence Research (JAIR)',
        year: 2022,
        links: [
          { name: 'PDF', url: '#' },
          { name: 'DOI', url: '#' },
        ],
    }
  ],
  news: [
    {
      id: 1,
      date: 'July 2024',
      content: 'I will be serving as an Area Chair for NeurIPS 2024. Looking forward to seeing great research!',
      featured: true,
    },
    {
      id: 2,
      date: 'June 2024',
      content: 'Our paper, "Grounding Language Models in Visual Perception," was accepted to ACL 2024. See you in Bangkok!',
    },
    {
      id: 3,
      date: 'March 2024',
      content: 'Gave an invited talk at the Stanford NLP Seminar on multimodal learning.',
      featured: true,
    },
    {
      id: 4,
      date: 'January 2024',
      content: 'Excited to welcome new PhD student, Alex Johnson, to our research group!',
    },
  ],
  blog: [
    {
      id: 1,
      slug: 'the-nuances-of-multimodality',
      title: 'The Nuances of Multimodality: Beyond Text and Image',
      date: '2024-08-15',
      summary: 'A deep dive into the challenges and opportunities in building AI that truly understands the world through multiple senses, going beyond the simple pairing of text and images.',
      content: `In the field of AI, "multimodality" has become a popular term, often referring to models that can process both text and images. While this is a significant step forward, it only scratches the surface of true multimodal understanding. The human experience is a rich tapestry woven from sight, sound, touch, and even abstract reasoning. To build more capable and robust AI, we must push beyond the current paradigm.

## The Challenge of Data Alignment
One of the primary challenges is data alignment. It's relatively easy to find images with corresponding captions. It is far more difficult to find datasets that tightly synchronize video, audio, text, and haptic feedback, for example.

![A network diagram showing connections between different data modalities like text, image, and audio.](https://picsum.photos/seed/multimodal/800/400)
*A conceptual visualization of multimodal data fusion.*

This scarcity forces researchers to develop innovative techniques for learning from loosely correlated or even uncorrelated data streams.

## Creating a Shared Representational Space
Another key area is representation. How do we create a shared representational space where concepts from different modalities can be compared and combined? Here's an example of a simplified model in TypeScript:

\`\`\`typescript
interface MultimodalConcept {
  id: string;
  // Representations from different modalities
  textual: string[];
  visual: ImageData[];
  auditory: AudioData[];
}

function fuse(data: MultimodalConcept): FusedRepresentation {
  // Use a cross-modal attention mechanism
  const textVector = encodeText(data.textual);
  const imageVector = encodeImage(data.visual);
  
  // Combine vectors into a single representation
  return crossAttention(textVector, imageVector);
}
\`\`\`

A "cat" can be:
- An image
- The spoken word /kæt/
- The written word \`cat\`
- A tactile sensation of fur.

A truly multimodal model must be able to fuse these disparate inputs into a single, coherent concept. We are exploring new architectures, like **cross-modal transformers** and **hybrid graph neural networks**, to tackle this very problem. The goal is not just to associate modalities, but to achieve a deeper, more grounded understanding of the world.`,
      featured: true,
    },
    {
      id: 2,
      slug: 'reflections-on-acl-2024',
      title: 'Reflections on ACL 2024',
      date: '2024-07-20',
      summary: 'Key takeaways and personal highlights from the Annual Meeting of the Association for Computational Linguistics in Bangkok.',
      content: `Returning from ACL 2024 in Bangkok, I'm filled with inspiration and a renewed sense of purpose for our research community. The conference was a whirlwind of brilliant talks, insightful posters, and engaging conversations.

A few themes stood out to me this year. First, the focus on efficiency and scalability is more prominent than ever. As models grow, so does the need for clever techniques like parameter-efficient fine-tuning (PEFT), quantization, and knowledge distillation to make them practical for real-world applications.

Second, the community is grappling with the societal impact of our work. There were numerous sessions dedicated to ethics, bias, and fairness in NLP. It's a critical conversation, and it's heartening to see it take center stage.

Finally, the work on cross-lingual and low-resource languages continues to be a vital area of research. Breaking down language barriers is one of the most promising applications of NLP, and the progress being made is truly remarkable. Our own lab was proud to present our work on a framework for few-shot cross-lingual transfer, which was met with great feedback. On to the next challenge!`,
      featured: true,
    }
  ],
  cv: {
    downloadLink: '#',
    education: [
      { id: 1, period: '2014 - 2019', title: 'Ph.D. in Computer Science', institution: 'Carnegie Mellon University' },
      { id: 2, period: '2010 - 2014', title: 'B.S. in Computer Science & Linguistics', institution: 'University of Washington' },
    ],
    experience: [
      { id: 1, period: '2021 - Present', title: 'Assistant Professor', institution: 'Institute for Advanced Study' },
      { id: 2, period: '2019 - 2021', title: 'Postdoctoral Researcher', institution: 'Microsoft Research AI' },
    ],
    awards: [
        { id: 1, period: '2023', title: 'Best Paper Award', institution: 'EMNLP Conference' },
        { id: 2, period: '2019', title: 'Siebel Scholar', institution: 'Carnegie Mellon University' },
        { id: 3, period: '2018', title: 'NSF Graduate Research Fellowship', institution: 'National Science Foundation' },
    ]
  }
};