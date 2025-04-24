const CTABtn = ({ className, ...props }) => {
  return (
    <a
      className={`cta  px-4 py-2 ${className}`}
      data-text="Get in touch"
      href="mailto:aszgryo@gmail.com"
      {...props}
    >
      <span
        className={`inline-block `}
        href="https://www.linkedin.com/in/ahmed-samy-zeid/"
      >
        Get in touch
      </span>
      <div className="cta-border"></div>
    </a>
  );
};
export default CTABtn;
