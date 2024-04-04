import tw from "twin.macro";

const Test = () => {
  return (
    <Wrapper>
      <Text>Test</Text>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex
  flex-col
  gap-4
  bg-white
  flex-center
`;

const Text = tw.p`
  text-blue-400
`;

export default Test;
