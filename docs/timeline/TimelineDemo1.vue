<script setup>
import { LeeTimeline, LeeTimelineItem } from "lee-vue3-components";
</script>

<template>
  <div style="display: flex">
    <LeeTimeline style="flex:1">
      <LeeTimelineItem
        title="入围赛"
        content="hello world"
        time="2024-12-31 10:00:00">
      </LeeTimelineItem>
      <LeeTimelineItem
        title="8强赛"
        content="hello world"
        time="2025-01-10 10:00:00">
      </LeeTimelineItem>
      <LeeTimelineItem
        title="4强赛"
        content="hello world"
        time="2025-01-20 10:00:00">
      </LeeTimelineItem>
      <LeeTimelineItem
        title="半决赛"
        content="hello world"
        time="2025-02-01 10:00:00">
      </LeeTimelineItem>
      <LeeTimelineItem
        title="决赛"
        content="hello world"
        time="2025-02-10 10:00:00">
      </LeeTimelineItem>
    </LeeTimeline>
    <LeeTimeline style="flex:1;" position="left">
      <LeeTimelineItem
        title="入围赛"
        content="hello world"
        time="2024-12-31 10:00:00">
      </LeeTimelineItem>
      <LeeTimelineItem
        title="8强赛"
        content="hello world"
        time="2025-01-10 10:00:00">
      </LeeTimelineItem>
      <LeeTimelineItem
        title="4强赛"
        content="hello world"
        time="2025-01-20 10:00:00">
      </LeeTimelineItem>
      <LeeTimelineItem
        title="半决赛"
        content="hello world"
        time="2025-02-01 10:00:00">
      </LeeTimelineItem>
      <LeeTimelineItem
        title="决赛"
        content="hello world"
        time="2025-02-10 10:00:00">
      </LeeTimelineItem>
    </LeeTimeline>
  </div>
</template>
