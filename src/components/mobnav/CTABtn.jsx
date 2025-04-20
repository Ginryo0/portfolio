const CTABtn = ({ className, ...props }) => {
  return (
    <div
      className={`cta  px-4 py-2 ${className}`}
      data-text="Hire me"
      {...props}
    >
      <a
        className={`inline-block `}
        href="https://www.linkedin.com/in/ahmed-zeid-106841257/"
        rel="noreferrer noopener"
        target="_blank"
      >
        Hire me
      </a>
      <div className="cta-border"></div>
    </div>
  );
};
export default CTABtn;
