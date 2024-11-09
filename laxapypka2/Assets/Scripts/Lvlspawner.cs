using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Lvlspawner : MonoBehaviour
{
    [SerializeField] GameObject [] platform;
    [SerializeField] int numberOfBlocks = 10;

    [SerializeField] float minX, maxX, minY, maxY;
    private Vector3 spawnPos = new Vector3();

    private void SpawnPlatform(GameObject obj)
    {
        spawnPos.x = Random.Range(minX, maxX);
        spawnPos.y += Random.Range(minY, maxY);
        Instantiate (obj, spawnPos, Quaternion.identity);
    }
    private void Start()
    {
        for(int a = 0; a < numberOfBlocks; a++)
        {
            int r = Random.Range(0, 101);
            if (r < 75)
            {
                SpawnPlatform(platform[Random.Range(2,platform.Length)]);
            }
            else if (r < 90) ;
            else
            {
                SpawnPlatform(platform[1]);
            }
            
            
        }
    }
}
