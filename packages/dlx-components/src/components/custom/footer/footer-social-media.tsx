export const FooterSocialMedia = ({
  icon,
  link,
}: {
  icon: React.ReactNode;
  link: string;
}) => {
  return (
    <a
      href={link}
      className="transition-all duration-300 transform hover:scale-110"
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
};
