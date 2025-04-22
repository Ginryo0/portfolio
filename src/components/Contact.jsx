import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import SectionWrapper from './hoc/SectionWrapper';
import { slideIn } from '../utils/motion';
import Alert from './Alert';
import Socials from './Socials';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Portfolio Mail',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setAlert('');
    }, 4000);
    if (
      !form.name ||
      !form.email ||
      !form.message ||
      !form.subject ||
      !form.email.includes('@')
    ) {
      setError('Please fill all fields with valid values.');
      setAlert('error');
      setTimeout(() => {
        setAlert('');
        setError('');
      }, 2000);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Ahmed',
          from_email: form.email,
          to_email: 'ginryoix@gmail.com',
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setAlert('success');
          setTimeout(() => {
            setAlert('');
          }, 2000);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          setAlert('error');
          setTimeout(() => {
            setAlert('');
          }, 2000);
        }
      );
  };

  return (
    <div
      className={`flex xl:items-start xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] relative bg-transparent border-tertiary border-2 p-8 rounded-lg"
      >
        {alert && <Alert state={alert} error={error}></Alert>}

        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} sm:mb-12`}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-tertiary">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Gin Ryo"
              className="px-6 py-4 font-medium text-white bg-opacity-50 border-none rounded-lg outline-none bg-primary-semi font-para placeholder:text-white-200"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-tertiary">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ahmed@gryo.com"
              className="px-6 py-4 font-medium text-white bg-opacity-50 border-none rounded-lg outline-none bg-primary-semi font-para placeholder:text-white-200"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-tertiary">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type message"
              className="px-6 py-4 font-medium text-white bg-opacity-50 border-none rounded-lg outline-none bg-primary-semi font-para placeholder:text-white-200"
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:align-center sm:gap-0">
            <button
              type="submit"
              className="px-8 py-3 cta w-fit"
              disabled={loading}
              data-text={loading ? 'Thanks 😊' : 'Say Hello'}
            >
              {loading ? 'Thanks 😊' : 'Say Hello'}
              <div className="cta-border"></div>
            </button>
            <Socials />
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 self-stretch xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const contactComponent = SectionWrapper(
  Contact,
  'contact',
  `min-h-screen w-full ${styles.padding} 
max-w-[clamp(350px,100vw,1500px)] mx-auto sm:pb-24  pb-40`
);

export default contactComponent;
