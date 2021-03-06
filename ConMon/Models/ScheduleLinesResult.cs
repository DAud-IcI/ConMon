﻿using System.Collections.Generic;

namespace ConMon.Models
{
    public class ScheduleLinesResult
    {
        public int LastId { get; set; }
        public IEnumerable<string> Lines { get; set; }

        public static ScheduleLinesResult FromTuple((int lastId, IEnumerable<string> lines) tuple) =>
            new ScheduleLinesResult
            {
                LastId = tuple.lastId,
                Lines = tuple.lines
            };
    }
}
