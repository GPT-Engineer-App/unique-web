import { useState } from "react";
import { Container, VStack, HStack, Text, Button, Input, Box, Image, IconButton } from "@chakra-ui/react";
import { FaRocket, FaTrash } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">To-Do List</Text>
        <HStack width="100%">
          <Input placeholder="Add a new task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <Button onClick={addItem} colorScheme="teal">
            Add
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {items.map((item, index) => (
            <HStack key={index} width="100%" justifyContent="space-between" padding={2} borderWidth={1} borderRadius="md">
              <Text>{item}</Text>
              <IconButton aria-label="Remove" icon={<FaTrash />} size="sm" onClick={() => removeItem(index)} />
            </HStack>
          ))}
        </VStack>
        <Box boxSize="sm">
          <Image src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0by1kbyUyMGxpc3QlMjBpbGx1c3RyYXRpb258ZW58MHx8fHwxNzE1ODMwNTUyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="To-Do List Illustration" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
