using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Lvlspawner : MonoBehaviour
{

    [SerializeField] GameObject[] platform;
    [SerializeField] int numofblocks = 10;
    private Vector3 spawnPos = new Vector3();

    [SerializeField] float minx, maxx, miny, maxy;
    

    private void SpawnPlatform(GameObject obj)
    {
        spawnPos.x = Random.Range(minx,maxx);
        spawnPos.y += Random.Range(miny,maxy);
        Instantiate(obj, spawnPos, Quaternion.identity);
    }

    private void Start()
    {
        for (int i = 0; i < numofblocks; i++)
        {
            if (Random.Range(0, 101) > 25)
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
