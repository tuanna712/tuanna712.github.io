
import { CVEntry } from '../types';

export const cv: {
    downloadLink: string;
    education: CVEntry[];
    researchExperience: CVEntry[];
    experience: CVEntry[];
    awards: CVEntry[];
    certifications: CVEntry[];
} = {
  downloadLink: 'assets/pdf/AcademicCV.pdf',
  education: [
    { 
      id: 1, 
      period: 'Aug. 2024 - Dec. 2025', 
      title: 'Master of Science in Data Science', 
      institution: 'University of Colorado Boulder',
      description: 'GPA: 4.0/4.0 | Boulder, CO, USA'
    },
    { 
      id: 2, 
      period: 'Aug. 2010 - May 2015', 
      title: 'BS in Geophysical Engineering', 
      institution: 'Hanoi University of Mining and Geology',
      description: 'GPA: 3.0/4.0 | Hanoi, Vietnam'
    },
  ],
  researchExperience: [
    {
      id: 1,
      period: 'July 2025 - Dec. 2025',
      title: 'Independent Study in Nesterov\'s Methods',
      institution: 'University of Colorado Boulder (Advised by Prof. Stephen Becker)',
      description: '• Reviewed state-of-the-art optimization methods for neural network training.\n• Established theoretical bounds showing how tracking error depends on batch size during training.\n• Developed proof-of-concept experiments evaluating a delayed sampling optimizer against Adam.'
    }
  ],
  experience: [
    { 
      id: 1, 
      period: 'June 2022 - Dec. 2025', 
      title: 'Data Science', 
      institution: 'Vietnam Petroleum Institute',
      description: '• Implemented benchmarking multimodal large language models for image classification tasks.\n• Developed machine learning models (XGBoost, LightGBM, LSTM) to predict missing well-log data.\n• Constructed well-log SQL database, EDA, automated reporting system, oil allocation analysis and documents RAG-based chatbot.'
    },
    { 
      id: 2, 
      period: 'Sep. 2015 - May 2022', 
      title: 'Geophysics', 
      institution: 'Vietnam Petroleum Institute',
      description: '• Developed automatic horizon extraction models. Software: Ellis Paleoscan\n• Implemented seismic attributes, well-ties, AVO and inversion models. Software: SLB Petrel, Hampson Russell\n• Interpreted faults system, horizons and constructed subsurface maps. Software: SLB Petrel, IHS Kingdom.'
    },
  ],
  awards: [
      { id: 1, period: '2023', title: 'Outstanding Graduate Student Award', institution: 'University of Colorado Boulder' },
      { id: 2, period: '2015', title: 'VPI Innovation Award', institution: 'Vietnam Petroleum Institute' },
  ],
  certifications: [
    { id: 1, period: '2022', title: 'Data Scientist Associate', institution: 'DataCamp Certification' },
    { id: 2, period: '2020', title: 'Seismic Signal Processing', institution: 'Vietnam Petroleum Institute' },
    { id: 3, period: '2018', title: 'Advanced Seismic Data Interpretation', institution: 'Vietnam Petroleum Institute' },
    { id: 4, period: '2017', title: 'Seismic Biostratigraphy Methodology', institution: 'Vietnam Petroleum Institute & Murphy Oil Corporation' },
  ]
};
