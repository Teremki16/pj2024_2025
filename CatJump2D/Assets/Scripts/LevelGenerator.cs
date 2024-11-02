using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LevelGenerator : MonoBehaviour
{
    [SerializeField] GameObject[] platform;
    [SerializeField] int numberOfBlocks = 10;


    [SerializeField] float minX, maxX, minY, maxY;
    private Vector3 spawnPos = new Vector3();


    private void SpawnPlatform(GameObject obj)
    {
        spawnPos.x = Random.Range(minX, maxX);
        spawnPos.y += Random.Range(minY, maxY);
        Instantiate(obj, spawnPos, Quaternion.identity);
    }

    private void Start()
    {
        for (int i = 0; i < numberOfBlocks; i++)
        {
            if(Random.Range(0, 101) > 25)
            {
                SpawnPlatform(platform[0]);
            }
            else
            {
                SpawnPlatform(platform[1]);
            }
        }
    }
     


}
