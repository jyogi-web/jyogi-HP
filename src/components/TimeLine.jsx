import React from "react";
import { Timeline, Text, Container, Heading } from "@chakra-ui/react";
import { Check } from "lucide-react";

const TimeLine = () => {
  // todo : KVからフェッチしてくるようにしても良いかも
  return (
    <Container>
      <Heading size="3xl">タイムライン</Heading>
      <Timeline.Root maxW="400px">
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator>
              <Check />
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>サイト開発開始</Timeline.Title>
            <Timeline.Description>2024/06/19</Timeline.Description>
            <Text textStyle="sm">サイトを作成しています</Text>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator>
              <Check />
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>NoTitle</Timeline.Title>
            <Timeline.Description>2024/07/07</Timeline.Description>
            <Text textStyle="sm">こんにちは😔</Text>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator>
              <Check />
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title textStyle="sm">NoTitle</Timeline.Title>
            <Timeline.Description>2024/08/08</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator>
              <Check />
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title textStyle="sm">NoTitle</Timeline.Title>
            <Timeline.Description>2024/09/09</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    </Container>
  );
};

export default TimeLine;
