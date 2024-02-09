const FooterSection = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <p className="text-center mt-3">
        Copyright &copy; {year} All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterSection;
