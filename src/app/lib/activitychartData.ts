export async function fetchActivityData(filter: 'week' | 'month') {
    // Mock data - replace with real API call
    if (filter === 'week') {
      return [
        { date: '10 Nov', theory: 15, practice: 20 },
        { date: '12 Nov', theory: 10, practice: 18 },
        { date: '14 Nov', theory: 20, practice: 21 },
        { date: '16 Nov', theory: 25, practice: 23 },
        { date: '18 Nov', theory: 22, practice: 26 },
        { date: '20 Nov', theory: 30, practice: 30 },
        { date: '22 Nov', theory: 28, practice: 35 },
        { date: '24 Nov', theory: 32, practice: 40 },
      ];
    } else {
      // Month-wise data
      return [
        { date: '01 Nov', theory: 12, practice: 15 },
        { date: '08 Nov', theory: 18, practice: 22 },
        { date: '15 Nov', theory: 25, practice: 28 },
        { date: '22 Nov', theory: 30, practice: 32 },
        { date: '29 Nov', theory: 35, practice: 40 },
      ];
    }
  }
  