import {expect} from 'chai';
import bestPath from '../Algorithms/iK/Homework/Recursion/bestPath';
import wildcard from '../Algorithms/iK/Homework/Recursion/wildcard';
import countTrees from '../Algorithms/iK/Homework/Recursion/countTrees';
import expressionCreator from '../Algorithms/iK/Homework/Recursion/expressionEvalulator';
import palindromicDecomposition from '../Algorithms/iK/Homework/Recursion/palindromicDecomposition';
import diameterOfTree from '../Algorithms/iK/Homework/Recursion/diameterOfTree';
import power from '../Algorithms/iK/Homework/Recursion/doublePower';

describe('Best Path Algorithm', () => {
  it('Basic Best Path correct test', () => {
    // 1 3 4 5 2
    // 9 8 2 3 4
    // 2 7 9 8 2
    // 1 + 9 + 8 + 7 + 9 + 8 + 2
    const board = [
      [1, 3, 4, 5, 2],
      [9, 8, 2, 3, 4],
      [2, 7, 9, 8, 2]
    ];

    const result = bestPath(board);

    expect(result).to.equal(1 + 9 + 8 + 7 + 9 + 8 + 2);
  });
});

describe('Wildcard Algorithm', () => {
  it('10? Correct Solution', () => {
    var result = wildcard('10?');

    expect(result).to.equal('100 101');
  });

  it('1?0? Correct Solution', () => {
    var result = wildcard('1?0?');

    expect(result).to.equal('1000 1001 1100 1101');
  });

  it('Edge case 10', () => {
    var result = wildcard('10');

    expect(result).to.equal('10');
  });
});

describe('Count Trees Algorithm', () => {
  it('1 Correct Solution', () => {
    var result = countTrees(1);

    expect(result).to.equal(1);
  });

  it('2 Correct Solution', () => {
    var result = countTrees(2);

    expect(result).to.equal(2);
  });

  it('3 Correct Solution', () => {
    var result = countTrees(3);

    expect(result).to.equal(5);
  });

  it('4 Correct Solution', () => {
    var result = countTrees(4);

    expect(result).to.equal(14);
  });

  it('5 Correct Solution', () => {
    var result = countTrees(5);

    expect(result).to.equal(42);
  });

  it('6 Correct Solution', () => {
    var result = countTrees(6);

    expect(result).to.equal(132);
  });

  it('Expression Evalulator', () => {
    const test1 = expressionCreator('2', 2);
    const test2 = expressionCreator('222', 24);
    const test3 = expressionCreator('222', 8);
    const test4 = expressionCreator('222', 6);
    const test5 = expressionCreator('1234', 14);
    const test6 = expressionCreator('222', 222);
    const test7 = expressionCreator('2', 1);
    const test8 = expressionCreator('34', 59);

    expect(test1.length).to.be.equal(1);
    expect(test1[0]).to.be.equal('2=2');

    expect(test2.length).to.be.equal(2);
    expect(test2[0]).to.be.equal('22+2=24');
    expect(test2[1]).to.be.equal('2+22=24');

    expect(test3.length).to.be.equal(1);
    expect(test3[0]).to.be.equal('2*2*2=8');

    expect(test4.length).to.be.equal(3);
    expect(test4[0]).to.be.equal('2*2+2=6');
    expect(test4[1]).to.be.equal('2+2*2=6');
    expect(test4[2]).to.be.equal('2+2+2=6');

    expect(test5.length).to.be.equal(1);
    expect(test5[0]).to.be.equal('1*2+3*4=14');

    expect(test6.length).to.be.equal(1);
    expect(test6[0]).to.be.equal('222=222');

    expect(test7.length).to.be.equal(0);
    expect(test8.length).to.be.equal(0);
  });

  it('Palindromic Decomposition', () => {
    const test1 = palindromicDecomposition('abracadabra');
    const test2 = palindromicDecomposition('desserts');
    const test3 = palindromicDecomposition('Neveroddoreven');

    expect(test1.length).to.be.equal(3);
    expect(test1[0]).to.be.equal('a|b|r|a|c|a|d|a|b|r|a|');
    expect(test1[1]).to.be.equal('a|b|r|a|c|ada|b|r|a|');
    expect(test1[2]).to.be.equal('a|b|r|aca|d|a|b|r|a|');

    expect(test2.length).to.be.equal(3);
    expect(test2[0]).to.be.equal('d|e|s|s|e|r|t|s|');
    expect(test2[1]).to.be.equal('d|e|ss|e|r|t|s|');
    expect(test2[2]).to.be.equal('d|esse|r|t|s|');

    expect(test3.length).to.be.equal(19);
    expect(test3[0]).to.be.equal('N|e|v|e|r|o|d|d|o|r|e|v|e|n|');
    expect(test3[1]).to.be.equal('N|e|v|e|r|o|d|d|o|r|eve|n|');
    expect(test3[2]).to.be.equal('N|e|v|e|r|o|dd|o|r|e|v|e|n|');
    expect(test3[3]).to.be.equal('N|e|v|e|r|o|dd|o|r|eve|n|');
    expect(test3[4]).to.be.equal('N|e|v|e|r|oddo|r|e|v|e|n|');
    expect(test3[5]).to.be.equal('N|e|v|e|r|oddo|r|eve|n|');
    expect(test3[6]).to.be.equal('N|e|v|e|roddor|e|v|e|n|');
    expect(test3[7]).to.be.equal('N|e|v|e|roddor|eve|n|');
    expect(test3[8]).to.be.equal('N|e|v|eroddore|v|e|n|');
    expect(test3[9]).to.be.equal('N|e|veroddorev|e|n|');
    expect(test3[10]).to.be.equal('N|eve|r|o|d|d|o|r|e|v|e|n|');
    expect(test3[11]).to.be.equal('N|eve|r|o|d|d|o|r|eve|n|');
    expect(test3[12]).to.be.equal('N|eve|r|o|dd|o|r|e|v|e|n|');
    expect(test3[13]).to.be.equal('N|eve|r|o|dd|o|r|eve|n|');
    expect(test3[14]).to.be.equal('N|eve|r|oddo|r|e|v|e|n|');
    expect(test3[15]).to.be.equal('N|eve|r|oddo|r|eve|n|');
    expect(test3[16]).to.be.equal('N|eve|roddor|e|v|e|n|');
    expect(test3[17]).to.be.equal('N|eve|roddor|eve|n|');
    expect(test3[18]).to.be.equal('N|everoddoreve|n|');
  });

  it('Diameter of Tree', () => {
    // difficulty reading input like this
    // const input = ["{0,3,{5,2,{8,0},{7,0}},{5,2,{9,0},{8,0}},{5,2,{10,0},{9,0}}}", 29];
    const input = {
      'distanceToFather': 0,
      'children': [
        {
          'distanceToFather': 5,
          'children': [
            {
              'distanceToFather': 8,
              'children': []
            },
            {
              'distanceToFather': 7,
              'children': []
            }
          ]
        },
        {
          'distanceToFather': 5,
          'children': [
            {
              'distanceToFather': 9,
              'children': []
            },
            {
              'distanceToFather': 8,
              'children': []
            }
          ]
        },
        {
          'distanceToFather': 5,
          'children': [
            {
              'distanceToFather': 10,
              'children': []
            },
            {
              'distanceToFather': 9,
              'children': []
            }
          ]
        }
      ]
    }

    const test1 = diameterOfTree(input);

    expect(test1).to.be.equal(29);
  });

  it('Double Power', () => {
    const test1 = power(10, 10);
    const test2 = power(2.45, 3);
    const test3 = power(7.334, 4);
    const test4 = power(2.45, 0);
    const test5 = power(2.45, -3);

    expect(test1).to.be.equal(10000000000);
    expect(test2).to.be.equal(14.706125000000004);
    expect(test3).to.be.equal(2893.1011804531354);
    expect(test4).to.be.equal(1);
    expect(test5).to.be.equal(0.06799887801851268);
  });
});
