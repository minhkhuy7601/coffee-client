export const scrollToView = (name: string) => {
  document?.getElementById(name)?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
};
