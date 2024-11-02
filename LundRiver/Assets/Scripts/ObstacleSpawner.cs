using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObstacleSpawner : MonoBehaviour
{
    [SerializeField] GameObject[] ObstacleObject;

    private void SpawnObstacle()
    {
        int number = Random.Range(0, ObstacleObject.Length - 1);
        Instantiate(ObstacleObject[number], transform.position, Quaternion.identity);
    }

    private void Start()
    {
        InvokeRepeating("SpawnObstacle", 1, 3);
    }
}
